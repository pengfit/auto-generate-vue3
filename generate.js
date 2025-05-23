const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const Sequelize = require('sequelize')

// Initialize Sequelize once (SQLite in-memory)
const sequelize = new Sequelize('sqlite::memory:')

// Paths
const modelsDir = path.join(__dirname, 'models')
const templatesDir = path.join(__dirname, 'templates')
const outputDir = path.join(__dirname, 'output')

// Make sure output directory exists
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

// Load all models
const models = {}
fs.readdirSync(modelsDir)
  .filter(f => f.endsWith('.js'))
  .forEach(file => {
    const modelFunc = require(path.join(modelsDir, file))
    if (typeof modelFunc === 'function') {
      try {
        const model = modelFunc(sequelize, Sequelize.DataTypes)
        if (model && model.rawAttributes) {
          models[file.replace('.js', '')] = model
        } else {
          console.warn(`⚠️ Model in ${file} missing rawAttributes, skipping.`)
        }
      } catch (err) {
        console.error(`❌ Error loading model ${file}:`, err.message)
      }
    } else {
      console.warn(`⚠️ File ${file} does not export a function, skipping.`)
    }
  })

// Generate Vue files from templates for each model
for (const [modelName, model] of Object.entries(models)) {
  const fields = Object.entries(model.rawAttributes).map(([name, attr]) => ({
    name,
    type: attr.type.key
  }))

  const templateData = { tableName: modelName, fields }

  // ListView
  const listTpl = fs.readFileSync(path.join(templatesDir, 'ListView.vue.ejs'), 'utf-8')
  const listContent = ejs.render(listTpl, templateData)
  fs.writeFileSync(path.join(outputDir, `${modelName}List.vue`), listContent)

  // FormView
  const formTpl = fs.readFileSync(path.join(templatesDir, 'FormView.vue.ejs'), 'utf-8')
  const formContent = ejs.render(formTpl, templateData)
  fs.writeFileSync(path.join(outputDir, `${modelName}Form.vue`), formContent)

  console.log(`✅ Generated Vue files for model: ${modelName}`)
}

console.log('🎉 All Vue files generated in:', outputDir)

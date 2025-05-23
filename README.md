# Vue 3 CRUD Generator — Quick Start Guide

### What  
Auto-generate Vue 3 CRUD pages from Sequelize models (based on MySQL tables) using EJS templates.

---

### Requirements  
- Node.js (v14+)  
- `sequelize-auto` generated models in `/models`  
- Vue EJS templates in `/templates`  
- `sqlite3` and `ejs` npm packages  

---

### Setup  

1. **Install dependencies**  
```bash
npm install sequelize sqlite3 ejs
```

2. **Generate Sequelize models**  
```bash
npx sequelize-auto -o "./models" -d dbname -h host -u user -p port -x pass -e mysql
```

3. **Create/Update Vue templates**  
Place or edit `ListView.vue.ejs` and `FormView.vue.ejs` in `/templates`.

4. **Run generator**  
```bash
node generate.js
```

5. **Use generated files**  
Find Vue files in `/output/` and add them to your Vue 3 project.

---

### Notes  

- Sequelize models must export a function returning `sequelize.define()`  
- If `sqlite3` errors occur, install manually: `npm install sqlite3`  
- Customize templates to fit your UI needs  

---

### Project layout  

```
/models      # Sequelize model files
/templates   # EJS templates for Vue components
/output      # Generated Vue files here
generate.js  # Generator script
package.json # Optional dependencies config
```
---

### Quick commands  

```bash
npm install
node generate.js
```

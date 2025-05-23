<template>
  <div>
    <h2 class="text-xl font-bold mb-4">sys_user Form</h2>

    <el-form :model="form" label-width="120px" @submit.prevent>
      
        <el-form-item label="">
          <el-input v-model="form.user_name" />
        </el-form-item>
      
        <el-form-item label="用户昵称(与手机号保持一致)">
          <el-input v-model="form.nick_name" />
        </el-form-item>
      
        <el-form-item label="用户类型（00系统用户）">
          <el-input v-model="form.user_type" />
        </el-form-item>
      
        <el-form-item label="手机号码">
          <el-input v-model="form.phone_number" />
        </el-form-item>
      
        <el-form-item label="密码">
          <el-input v-model="form.password" />
        </el-form-item>
      
        <el-form-item label="帐号状态（0 正常 1 停用）">
          <el-input v-model="form.status" />
        </el-form-item>
      
        <el-form-item label="是否修改密码（0 未修改， 1 已修改）">
          <el-input v-model="form.reset_pass" />
        </el-form-item>
      
        <el-form-item label="删除标志（0代表存在 1代表删除）">
          <el-input v-model="form.del_flag" />
        </el-form-item>
      
        <el-form-item label="最后登录IP">
          <el-input v-model="form.login_ip" />
        </el-form-item>
      
        <el-form-item label="最后登录时间">
          <el-input v-model="form.login_date" />
        </el-form-item>
      
        <el-form-item label="创建者">
          <el-input v-model="form.create_by" />
        </el-form-item>
      
        <el-form-item label="创建时间">
          <el-input v-model="form.create_time" />
        </el-form-item>
      
        <el-form-item label="更新者">
          <el-input v-model="form.update_by" />
        </el-form-item>
      
        <el-form-item label="更新时间">
          <el-input v-model="form.update_time" />
        </el-form-item>
      
        <el-form-item label="备注">
          <el-input v-model="form.remark" />
        </el-form-item>
      

      <el-form-item>
        <el-button type="primary" @click="submitForm">Save</el-button>
        <el-button @click="goBack">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const form = ref({})
const route = useRoute()
const router = useRouter()

const id = route.params.id

onMounted(async () => {
  if (id) {
    const res = await fetch(`/api/sys_user/${id}`)
    form.value = await res.json()
  }
})

const submitForm = async () => {
  const method = id ? 'PUT' : 'POST'
  const url = id ? `/api/sys_user/${id}` : `/api/sys_user`
  try {
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    ElMessage.success('Saved successfully')
    router.push('/sys_user')
  } catch (error) {
    ElMessage.error('Failed to save')
  }
}

const goBack = () => {
  router.push('/sys_user')
}
</script>

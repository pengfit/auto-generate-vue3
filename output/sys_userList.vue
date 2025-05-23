<template>
  <div>
    <h2 class="text-xl font-bold mb-4">sys_user List</h2>

    <el-table :data="items" style="width: 100%">
      
        <el-table-column prop="id" label="用户ID" />
      
        <el-table-column prop="user_name" label="" />
      
        <el-table-column prop="nick_name" label="用户昵称(与手机号保持一致)" />
      
        <el-table-column prop="user_type" label="用户类型（00系统用户）" />
      
        <el-table-column prop="phone_number" label="手机号码" />
      
        <el-table-column prop="password" label="密码" />
      
        <el-table-column prop="status" label="帐号状态（0 正常 1 停用）" />
      
        <el-table-column prop="reset_pass" label="是否修改密码（0 未修改， 1 已修改）" />
      
        <el-table-column prop="del_flag" label="删除标志（0代表存在 1代表删除）" />
      
        <el-table-column prop="login_ip" label="最后登录IP" />
      
        <el-table-column prop="login_date" label="最后登录时间" />
      
        <el-table-column prop="create_by" label="创建者" />
      
        <el-table-column prop="create_time" label="创建时间" />
      
        <el-table-column prop="update_by" label="更新者" />
      
        <el-table-column prop="update_time" label="更新时间" />
      
        <el-table-column prop="remark" label="备注" />
      
      <el-table-column label="Actions" width="180">
        <template #default="scope">
          <el-button size="small" type="primary" @click="editItem(scope.row)">Edit</el-button>
          <el-button size="small" type="danger" @click="deleteItem(scope.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'

const items = ref([])

const fetchItems = async () => {
  const res = await fetch('/api/sys_user')
  items.value = await res.json()
}

const deleteItem = async (id) => {
  try {
    await ElMessageBox.confirm('Are you sure you want to delete this item?', 'Warning', {
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      type: 'warning',
    })
    await fetch(`/api/sys_user/${id}`, { method: 'DELETE' })
    ElMessage.success('Item deleted successfully')
    fetchItems()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('Failed to delete item')
    }
  }
}

const editItem = (item) => {
  // Navigate to an edit form or open a modal
  console.log('Edit', item)
}

onMounted(() => {
  fetchItems()
})
</script>

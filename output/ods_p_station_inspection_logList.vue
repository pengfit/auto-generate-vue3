<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_inspection_log List</h2>

    <el-table :data="items" style="width: 100%">
      
        <el-table-column prop="id" label="" />
      
        <el-table-column prop="pch" label="批次流水号" />
      
        <el-table-column prop="oid" label="原始数据id" />
      
        <el-table-column prop="qytyxydm" label="信用代码" />
      
        <el-table-column prop="xzqhbm" label="所属区域编码" />
      
        <el-table-column prop="sjtp_cd" label="数据类型" />
      
        <el-table-column prop="jsclfs" label="接收处理方式" />
      
        <el-table-column prop="sjbgsj" label="数据变更时间" />
      
        <el-table-column prop="fk_cz_id" label="外键" />
      
        <el-table-column prop="xjrxm" label="巡检人姓名" />
      
        <el-table-column prop="sbyh" label="上报隐患,文字描述" />
      
        <el-table-column prop="sffzyh_cd" label="是否存在隐患" />
      
        <el-table-column prop="xjsj" label="巡检时间" />
      
        <el-table-column prop="yhsfzd_cd" label="隐患是否重大" />
      
        <el-table-column prop="sjhqfs" label="数据获取方式" />
      
        <el-table-column prop="sjtbr" label="数据填报人" />
      
        <el-table-column prop="sjcrsj" label="数据插入时间" />
      
        <el-table-column prop="sync_status" label="同步状态：0-未同步，1-已同步" />
      
        <el-table-column prop="locked" label="锁定状态：0-未锁定，1-已锁定" />
      
        <el-table-column prop="sync_time" label="最后同步时间" />
      
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
  const res = await fetch('/api/ods_p_station_inspection_log')
  items.value = await res.json()
}

const deleteItem = async (id) => {
  try {
    await ElMessageBox.confirm('Are you sure you want to delete this item?', 'Warning', {
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      type: 'warning',
    })
    await fetch(`/api/ods_p_station_inspection_log/${id}`, { method: 'DELETE' })
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

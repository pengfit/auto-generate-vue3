<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_hd_attr List</h2>

    <el-table :data="items" style="width: 100%">
      
        <el-table-column prop="id" label="" />
      
        <el-table-column prop="pch" label="批次流水号" />
      
        <el-table-column prop="oid" label="原始数据id" />
      
        <el-table-column prop="qytyxydm" label="信用代码" />
      
        <el-table-column prop="xzqhbm" label="所属区域编码" />
      
        <el-table-column prop="sjtp_cd" label="数据类型" />
      
        <el-table-column prop="jsclfs" label="接收处理方式" />
      
        <el-table-column prop="sjbgsj" label="数据变更时间" />
      
        <el-table-column prop="yhly_cd" label="隐患来源" />
      
        <el-table-column prop="fk_cz_id" label="外键" />
      
        <el-table-column prop="yhms" label="隐患描述" />
      
        <el-table-column prop="yhdj_cd" label="隐患等级" />
      
        <el-table-column prop="yhdz" label="隐患位置地址（厂站地址）" />
      
        <el-table-column prop="yhsbsj" label="隐患上报时间" />
      
        <el-table-column prop="pcryxm" label="排查人员姓名" />
      
        <el-table-column prop="pcdwmc" label="排查单位名称（厂站巡检填燃气企业名称）" />
      
        <el-table-column prop="pcfs_cd" label="排查方式" />
      
        <el-table-column prop="zgqx" label="整改期限" />
      
        <el-table-column prop="zgyq" label="整改要求" />
      
        <el-table-column prop="zgsj" label="整改时间" />
      
        <el-table-column prop="zgzt_cd" label="整改状态（默认为未整改；整改后再次推送,状态变为‘已整改未销号’）" />
      
        <el-table-column prop="zrrxm" label="隐患责任人姓名" />
      
        <el-table-column prop="sjhqfs" label="数据获取方式" />
      
        <el-table-column prop="sjtbr" label="数据填报人" />
      
        <el-table-column prop="sjcrsj" label="数据插入时间" />
      
        <el-table-column prop="fk_xjjl_id" label="外键" />
      
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
  const res = await fetch('/api/ods_p_station_hd_attr')
  items.value = await res.json()
}

const deleteItem = async (id) => {
  try {
    await ElMessageBox.confirm('Are you sure you want to delete this item?', 'Warning', {
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      type: 'warning',
    })
    await fetch(`/api/ods_p_station_hd_attr/${id}`, { method: 'DELETE' })
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

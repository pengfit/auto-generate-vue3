<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_attr List</h2>

    <el-table :data="items" style="width: 100%">
      
        <el-table-column prop="id" label="" />
      
        <el-table-column prop="pch" label="批次流水号" />
      
        <el-table-column prop="oid" label="原始数据id" />
      
        <el-table-column prop="qytyxydm" label="信用代码" />
      
        <el-table-column prop="xzqhbm" label="所属区域编码" />
      
        <el-table-column prop="sjtp_cd" label="数据类型" />
      
        <el-table-column prop="jsclfs" label="接收处理方式" />
      
        <el-table-column prop="sjbgsj" label="数据变更时间" />
      
        <el-table-column prop="czbh" label="企业系统内的厂站编号" />
      
        <el-table-column prop="czmc" label="厂站名称" />
      
        <el-table-column prop="czlx_cd" label="厂站类型" />
      
        <el-table-column prop="jcnd" label="建设年代" />
      
        <el-table-column prop="czdz" label="厂站地址" />
      
        <el-table-column prop="zdmj" label="占地面积" />
      
        <el-table-column prop="geom" label="经纬度geomtry" />
      
        <el-table-column prop="jzsjylfw" label="进站设计压力范围" />
      
        <el-table-column prop="fzsjylfw" label="出站设计压力范围" />
      
        <el-table-column prop="jgysjl_cd" label="竣工验收结论" />
      
        <el-table-column prop="geom_bhfw" label="保护范围geomtry" />
      
        <el-table-column prop="zzcqqps" label="自主产权气瓶数量" />
      
        <el-table-column prop="czfzr" label="厂站负责人" />
      
        <el-table-column prop="fzrlxfs" label="厂站负责人联系方式" />
      
        <el-table-column prop="bz" label="备注" />
      
        <el-table-column prop="jsdw" label="建设单位名称" />
      
        <el-table-column prop="jgysrq" label="竣工验收日期" />
      
        <el-table-column prop="syzt_cd" label="使用状态" />
      
        <el-table-column prop="bh" label="充装证编号（厂站为充装站时填写）" />
      
        <el-table-column prop="czjz" label="充装介质（厂站为充装站时填写）" />
      
        <el-table-column prop="fzrq" label="发证日期（厂站为充装站时填写）" />
      
        <el-table-column prop="dqrq" label="充装证到期日期（厂站为充装站时填写）" />
      
        <el-table-column prop="rgql" label="日供气量，单位:立方米" />
      
        <el-table-column prop="cqrj" label="厂站储气容积，单位:立方米" />
      
        <el-table-column prop="sjhqfs" label="数据获取方式，1=企业对接,2=平台对接,3=主管部门对接,4=填报,5=其他" />
      
        <el-table-column prop="sjtbr" label="数据填报人" />
      
        <el-table-column prop="sjcrsj" label="数据插入时间" />
      
        <el-table-column prop="geom_lon" label="经度" />
      
        <el-table-column prop="geom_lat" label="纬度" />
      
        <el-table-column prop="geom_bhfw_lon" label="经度" />
      
        <el-table-column prop="geom_bhfw_lat" label="纬度" />
      
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
  const res = await fetch('/api/ods_p_station_attr')
  items.value = await res.json()
}

const deleteItem = async (id) => {
  try {
    await ElMessageBox.confirm('Are you sure you want to delete this item?', 'Warning', {
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      type: 'warning',
    })
    await fetch(`/api/ods_p_station_attr/${id}`, { method: 'DELETE' })
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

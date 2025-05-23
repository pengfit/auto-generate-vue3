<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_inspection_log Form</h2>

    <el-form :model="form" label-width="120px" @submit.prevent>
      
        <el-form-item label="批次流水号">
          <el-input v-model="form.pch" />
        </el-form-item>
      
        <el-form-item label="原始数据id">
          <el-input v-model="form.oid" />
        </el-form-item>
      
        <el-form-item label="信用代码">
          <el-input v-model="form.qytyxydm" />
        </el-form-item>
      
        <el-form-item label="所属区域编码">
          <el-input v-model="form.xzqhbm" />
        </el-form-item>
      
        <el-form-item label="数据类型">
          <el-input v-model="form.sjtp_cd" />
        </el-form-item>
      
        <el-form-item label="接收处理方式">
          <el-input v-model="form.jsclfs" />
        </el-form-item>
      
        <el-form-item label="数据变更时间">
          <el-input v-model="form.sjbgsj" />
        </el-form-item>
      
        <el-form-item label="外键">
          <el-input v-model="form.fk_cz_id" />
        </el-form-item>
      
        <el-form-item label="巡检人姓名">
          <el-input v-model="form.xjrxm" />
        </el-form-item>
      
        <el-form-item label="上报隐患,文字描述">
          <el-input v-model="form.sbyh" />
        </el-form-item>
      
        <el-form-item label="是否存在隐患">
          <el-input v-model="form.sffzyh_cd" />
        </el-form-item>
      
        <el-form-item label="巡检时间">
          <el-input v-model="form.xjsj" />
        </el-form-item>
      
        <el-form-item label="隐患是否重大">
          <el-input v-model="form.yhsfzd_cd" />
        </el-form-item>
      
        <el-form-item label="数据获取方式">
          <el-input v-model="form.sjhqfs" />
        </el-form-item>
      
        <el-form-item label="数据填报人">
          <el-input v-model="form.sjtbr" />
        </el-form-item>
      
        <el-form-item label="数据插入时间">
          <el-input v-model="form.sjcrsj" />
        </el-form-item>
      
        <el-form-item label="同步状态：0-未同步，1-已同步">
          <el-input v-model="form.sync_status" />
        </el-form-item>
      
        <el-form-item label="锁定状态：0-未锁定，1-已锁定">
          <el-input v-model="form.locked" />
        </el-form-item>
      
        <el-form-item label="最后同步时间">
          <el-input v-model="form.sync_time" />
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
    const res = await fetch(`/api/ods_p_station_inspection_log/${id}`)
    form.value = await res.json()
  }
})

const submitForm = async () => {
  const method = id ? 'PUT' : 'POST'
  const url = id ? `/api/ods_p_station_inspection_log/${id}` : `/api/ods_p_station_inspection_log`
  try {
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    ElMessage.success('Saved successfully')
    router.push('/ods_p_station_inspection_log')
  } catch (error) {
    ElMessage.error('Failed to save')
  }
}

const goBack = () => {
  router.push('/ods_p_station_inspection_log')
}
</script>

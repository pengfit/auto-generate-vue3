<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_hd_attr Form</h2>

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
      
        <el-form-item label="隐患来源">
          <el-input v-model="form.yhly_cd" />
        </el-form-item>
      
        <el-form-item label="外键">
          <el-input v-model="form.fk_cz_id" />
        </el-form-item>
      
        <el-form-item label="隐患描述">
          <el-input v-model="form.yhms" />
        </el-form-item>
      
        <el-form-item label="隐患等级">
          <el-input v-model="form.yhdj_cd" />
        </el-form-item>
      
        <el-form-item label="隐患位置地址（厂站地址）">
          <el-input v-model="form.yhdz" />
        </el-form-item>
      
        <el-form-item label="隐患上报时间">
          <el-input v-model="form.yhsbsj" />
        </el-form-item>
      
        <el-form-item label="排查人员姓名">
          <el-input v-model="form.pcryxm" />
        </el-form-item>
      
        <el-form-item label="排查单位名称（厂站巡检填燃气企业名称）">
          <el-input v-model="form.pcdwmc" />
        </el-form-item>
      
        <el-form-item label="排查方式">
          <el-input v-model="form.pcfs_cd" />
        </el-form-item>
      
        <el-form-item label="整改期限">
          <el-input v-model="form.zgqx" />
        </el-form-item>
      
        <el-form-item label="整改要求">
          <el-input v-model="form.zgyq" />
        </el-form-item>
      
        <el-form-item label="整改时间">
          <el-input v-model="form.zgsj" />
        </el-form-item>
      
        <el-form-item label="整改状态（默认为未整改；整改后再次推送,状态变为‘已整改未销号’）">
          <el-input v-model="form.zgzt_cd" />
        </el-form-item>
      
        <el-form-item label="隐患责任人姓名">
          <el-input v-model="form.zrrxm" />
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
      
        <el-form-item label="外键">
          <el-input v-model="form.fk_xjjl_id" />
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
    const res = await fetch(`/api/ods_p_station_hd_attr/${id}`)
    form.value = await res.json()
  }
})

const submitForm = async () => {
  const method = id ? 'PUT' : 'POST'
  const url = id ? `/api/ods_p_station_hd_attr/${id}` : `/api/ods_p_station_hd_attr`
  try {
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    ElMessage.success('Saved successfully')
    router.push('/ods_p_station_hd_attr')
  } catch (error) {
    ElMessage.error('Failed to save')
  }
}

const goBack = () => {
  router.push('/ods_p_station_hd_attr')
}
</script>

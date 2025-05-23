<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_attr Form</h2>

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
      
        <el-form-item label="企业系统内的厂站编号">
          <el-input v-model="form.czbh" />
        </el-form-item>
      
        <el-form-item label="厂站名称">
          <el-input v-model="form.czmc" />
        </el-form-item>
      
        <el-form-item label="厂站类型">
          <el-input v-model="form.czlx_cd" />
        </el-form-item>
      
        <el-form-item label="建设年代">
          <el-input v-model="form.jcnd" />
        </el-form-item>
      
        <el-form-item label="厂站地址">
          <el-input v-model="form.czdz" />
        </el-form-item>
      
        <el-form-item label="占地面积">
          <el-input v-model="form.zdmj" />
        </el-form-item>
      
        <el-form-item label="经纬度geomtry">
          <el-input v-model="form.geom" />
        </el-form-item>
      
        <el-form-item label="进站设计压力范围">
          <el-input v-model="form.jzsjylfw" />
        </el-form-item>
      
        <el-form-item label="出站设计压力范围">
          <el-input v-model="form.fzsjylfw" />
        </el-form-item>
      
        <el-form-item label="竣工验收结论">
          <el-input v-model="form.jgysjl_cd" />
        </el-form-item>
      
        <el-form-item label="保护范围geomtry">
          <el-input v-model="form.geom_bhfw" />
        </el-form-item>
      
        <el-form-item label="自主产权气瓶数量">
          <el-input v-model="form.zzcqqps" />
        </el-form-item>
      
        <el-form-item label="厂站负责人">
          <el-input v-model="form.czfzr" />
        </el-form-item>
      
        <el-form-item label="厂站负责人联系方式">
          <el-input v-model="form.fzrlxfs" />
        </el-form-item>
      
        <el-form-item label="备注">
          <el-input v-model="form.bz" />
        </el-form-item>
      
        <el-form-item label="建设单位名称">
          <el-input v-model="form.jsdw" />
        </el-form-item>
      
        <el-form-item label="竣工验收日期">
          <el-input v-model="form.jgysrq" />
        </el-form-item>
      
        <el-form-item label="使用状态">
          <el-input v-model="form.syzt_cd" />
        </el-form-item>
      
        <el-form-item label="充装证编号（厂站为充装站时填写）">
          <el-input v-model="form.bh" />
        </el-form-item>
      
        <el-form-item label="充装介质（厂站为充装站时填写）">
          <el-input v-model="form.czjz" />
        </el-form-item>
      
        <el-form-item label="发证日期（厂站为充装站时填写）">
          <el-input v-model="form.fzrq" />
        </el-form-item>
      
        <el-form-item label="充装证到期日期（厂站为充装站时填写）">
          <el-input v-model="form.dqrq" />
        </el-form-item>
      
        <el-form-item label="日供气量，单位:立方米">
          <el-input v-model="form.rgql" />
        </el-form-item>
      
        <el-form-item label="厂站储气容积，单位:立方米">
          <el-input v-model="form.cqrj" />
        </el-form-item>
      
        <el-form-item label="数据获取方式，1=企业对接,2=平台对接,3=主管部门对接,4=填报,5=其他">
          <el-input v-model="form.sjhqfs" />
        </el-form-item>
      
        <el-form-item label="数据填报人">
          <el-input v-model="form.sjtbr" />
        </el-form-item>
      
        <el-form-item label="数据插入时间">
          <el-input v-model="form.sjcrsj" />
        </el-form-item>
      
        <el-form-item label="经度">
          <el-input v-model="form.geom_lon" />
        </el-form-item>
      
        <el-form-item label="纬度">
          <el-input v-model="form.geom_lat" />
        </el-form-item>
      
        <el-form-item label="经度">
          <el-input v-model="form.geom_bhfw_lon" />
        </el-form-item>
      
        <el-form-item label="纬度">
          <el-input v-model="form.geom_bhfw_lat" />
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
    const res = await fetch(`/api/ods_p_station_attr/${id}`)
    form.value = await res.json()
  }
})

const submitForm = async () => {
  const method = id ? 'PUT' : 'POST'
  const url = id ? `/api/ods_p_station_attr/${id}` : `/api/ods_p_station_attr`
  try {
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    ElMessage.success('Saved successfully')
    router.push('/ods_p_station_attr')
  } catch (error) {
    ElMessage.error('Failed to save')
  }
}

const goBack = () => {
  router.push('/ods_p_station_attr')
}
</script>

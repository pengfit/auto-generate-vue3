<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_hd_attr Form</h2>
    
    <form @submit.prevent="submitForm">
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">pch</label>
          <input v-model="form.pch" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">oid</label>
          <input v-model="form.oid" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">qytyxydm</label>
          <input v-model="form.qytyxydm" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">xzqhbm</label>
          <input v-model="form.xzqhbm" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">sjtp_cd</label>
          <input v-model="form.sjtp_cd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">jsclfs</label>
          <input v-model="form.jsclfs" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">sjbgsj</label>
          <input v-model="form.sjbgsj" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">yhly_cd</label>
          <input v-model="form.yhly_cd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">fk_cz_id</label>
          <input v-model="form.fk_cz_id" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">yhms</label>
          <input v-model="form.yhms" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">yhdj_cd</label>
          <input v-model="form.yhdj_cd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">yhdz</label>
          <input v-model="form.yhdz" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">yhsbsj</label>
          <input v-model="form.yhsbsj" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">pcryxm</label>
          <input v-model="form.pcryxm" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">pcdwmc</label>
          <input v-model="form.pcdwmc" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">pcfs_cd</label>
          <input v-model="form.pcfs_cd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">zgqx</label>
          <input v-model="form.zgqx" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">zgyq</label>
          <input v-model="form.zgyq" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">zgsj</label>
          <input v-model="form.zgsj" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">zgzt_cd</label>
          <input v-model="form.zgzt_cd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">zrrxm</label>
          <input v-model="form.zrrxm" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">sjhqfs</label>
          <input v-model="form.sjhqfs" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">sjtbr</label>
          <input v-model="form.sjtbr" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">sjcrsj</label>
          <input v-model="form.sjcrsj" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">fk_xjjl_id</label>
          <input v-model="form.fk_xjjl_id" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">sync_status</label>
          <input v-model="form.sync_status" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">locked</label>
          <input v-model="form.locked" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">sync_time</label>
          <input v-model="form.sync_time" class="border p-2 w-full" />
        </div>
      

      <button type="submit" class="bg-blue-500 text-white px-4 py-2">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

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
  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value)
  })
  router.push('/ods_p_station_hd_attr')
}
</script>

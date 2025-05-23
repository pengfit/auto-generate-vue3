<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_inspection_log Form</h2>
    
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
          <label class="block mb-1 capitalize">fk_cz_id</label>
          <input v-model="form.fk_cz_id" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">xjrxm</label>
          <input v-model="form.xjrxm" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">sbyh</label>
          <input v-model="form.sbyh" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">sffzyh_cd</label>
          <input v-model="form.sffzyh_cd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">xjsj</label>
          <input v-model="form.xjsj" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">yhsfzd_cd</label>
          <input v-model="form.yhsfzd_cd" class="border p-2 w-full" />
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
    const res = await fetch(`/api/ods_p_station_inspection_log/${id}`)
    form.value = await res.json()
  }
})

const submitForm = async () => {
  const method = id ? 'PUT' : 'POST'
  const url = id ? `/api/ods_p_station_inspection_log/${id}` : `/api/ods_p_station_inspection_log`
  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value)
  })
  router.push('/ods_p_station_inspection_log')
}
</script>

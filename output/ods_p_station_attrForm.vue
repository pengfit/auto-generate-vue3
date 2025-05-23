<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_attr Form</h2>
    
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
          <label class="block mb-1 capitalize">czbh</label>
          <input v-model="form.czbh" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">czmc</label>
          <input v-model="form.czmc" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">czlx_cd</label>
          <input v-model="form.czlx_cd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">jcnd</label>
          <input v-model="form.jcnd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">czdz</label>
          <input v-model="form.czdz" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">zdmj</label>
          <input v-model="form.zdmj" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">geom</label>
          <input v-model="form.geom" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">jzsjylfw</label>
          <input v-model="form.jzsjylfw" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">fzsjylfw</label>
          <input v-model="form.fzsjylfw" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">jgysjl_cd</label>
          <input v-model="form.jgysjl_cd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">geom_bhfw</label>
          <input v-model="form.geom_bhfw" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">zzcqqps</label>
          <input v-model="form.zzcqqps" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">czfzr</label>
          <input v-model="form.czfzr" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">fzrlxfs</label>
          <input v-model="form.fzrlxfs" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">bz</label>
          <input v-model="form.bz" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">jsdw</label>
          <input v-model="form.jsdw" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">jgysrq</label>
          <input v-model="form.jgysrq" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">syzt_cd</label>
          <input v-model="form.syzt_cd" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">bh</label>
          <input v-model="form.bh" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">czjz</label>
          <input v-model="form.czjz" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">fzrq</label>
          <input v-model="form.fzrq" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">dqrq</label>
          <input v-model="form.dqrq" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">rgql</label>
          <input v-model="form.rgql" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">cqrj</label>
          <input v-model="form.cqrj" class="border p-2 w-full" />
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
          <label class="block mb-1 capitalize">geom_lon</label>
          <input v-model="form.geom_lon" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">geom_lat</label>
          <input v-model="form.geom_lat" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">geom_bhfw_lon</label>
          <input v-model="form.geom_bhfw_lon" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">geom_bhfw_lat</label>
          <input v-model="form.geom_bhfw_lat" class="border p-2 w-full" />
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
    const res = await fetch(`/api/ods_p_station_attr/${id}`)
    form.value = await res.json()
  }
})

const submitForm = async () => {
  const method = id ? 'PUT' : 'POST'
  const url = id ? `/api/ods_p_station_attr/${id}` : `/api/ods_p_station_attr`
  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value)
  })
  router.push('/ods_p_station_attr')
}
</script>

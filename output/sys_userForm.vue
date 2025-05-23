<template>
  <div>
    <h2 class="text-xl font-bold mb-4">sys_user Form</h2>
    
    <form @submit.prevent="submitForm">
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">user_name</label>
          <input v-model="form.user_name" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">nick_name</label>
          <input v-model="form.nick_name" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">user_type</label>
          <input v-model="form.user_type" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">phone_number</label>
          <input v-model="form.phone_number" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">password</label>
          <input v-model="form.password" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">status</label>
          <input v-model="form.status" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">reset_pass</label>
          <input v-model="form.reset_pass" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">del_flag</label>
          <input v-model="form.del_flag" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">login_ip</label>
          <input v-model="form.login_ip" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">login_date</label>
          <input v-model="form.login_date" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">create_by</label>
          <input v-model="form.create_by" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">create_time</label>
          <input v-model="form.create_time" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">update_by</label>
          <input v-model="form.update_by" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">update_time</label>
          <input v-model="form.update_time" class="border p-2 w-full" />
        </div>
      
        <div class="mb-4">
          <label class="block mb-1 capitalize">remark</label>
          <input v-model="form.remark" class="border p-2 w-full" />
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
    const res = await fetch(`/api/sys_user/${id}`)
    form.value = await res.json()
  }
})

const submitForm = async () => {
  const method = id ? 'PUT' : 'POST'
  const url = id ? `/api/sys_user/${id}` : `/api/sys_user`
  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value)
  })
  router.push('/sys_user')
}
</script>

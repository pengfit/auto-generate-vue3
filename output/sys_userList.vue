<template>
  <div>
    <h2 class="text-xl font-bold mb-4">sys_user List</h2>
    
    <table class="table-auto w-full border">
      <thead>
        <tr>
          
            <th class="border px-4 py-2 text-left">id</th>
          
            <th class="border px-4 py-2 text-left">user_name</th>
          
            <th class="border px-4 py-2 text-left">nick_name</th>
          
            <th class="border px-4 py-2 text-left">user_type</th>
          
            <th class="border px-4 py-2 text-left">phone_number</th>
          
            <th class="border px-4 py-2 text-left">password</th>
          
            <th class="border px-4 py-2 text-left">status</th>
          
            <th class="border px-4 py-2 text-left">reset_pass</th>
          
            <th class="border px-4 py-2 text-left">del_flag</th>
          
            <th class="border px-4 py-2 text-left">login_ip</th>
          
            <th class="border px-4 py-2 text-left">login_date</th>
          
            <th class="border px-4 py-2 text-left">create_by</th>
          
            <th class="border px-4 py-2 text-left">create_time</th>
          
            <th class="border px-4 py-2 text-left">update_by</th>
          
            <th class="border px-4 py-2 text-left">update_time</th>
          
            <th class="border px-4 py-2 text-left">remark</th>
          
          <th class="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          
            <td class="border px-4 py-2">{{ item.id }}</td>
          
            <td class="border px-4 py-2">{{ item.user_name }}</td>
          
            <td class="border px-4 py-2">{{ item.nick_name }}</td>
          
            <td class="border px-4 py-2">{{ item.user_type }}</td>
          
            <td class="border px-4 py-2">{{ item.phone_number }}</td>
          
            <td class="border px-4 py-2">{{ item.password }}</td>
          
            <td class="border px-4 py-2">{{ item.status }}</td>
          
            <td class="border px-4 py-2">{{ item.reset_pass }}</td>
          
            <td class="border px-4 py-2">{{ item.del_flag }}</td>
          
            <td class="border px-4 py-2">{{ item.login_ip }}</td>
          
            <td class="border px-4 py-2">{{ item.login_date }}</td>
          
            <td class="border px-4 py-2">{{ item.create_by }}</td>
          
            <td class="border px-4 py-2">{{ item.create_time }}</td>
          
            <td class="border px-4 py-2">{{ item.update_by }}</td>
          
            <td class="border px-4 py-2">{{ item.update_time }}</td>
          
            <td class="border px-4 py-2">{{ item.remark }}</td>
          
          <td class="border px-4 py-2">
            <button @click="editItem(item)">Edit</button>
            <button @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items = ref([])

const fetchItems = async () => {
  const res = await fetch('/api/sys_user')
  items.value = await res.json()
}

const deleteItem = async (id) => {
  await fetch(`/api/sys_user/${id}`, { method: 'DELETE' })
  fetchItems()
}

const editItem = (item) => {
  // You can navigate to an edit form page here, e.g., using Vue Router
  console.log('Edit', item)
}

onMounted(() => {
  fetchItems()
})
</script>

<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_inspection_log List</h2>
    
    <table class="table-auto w-full border">
      <thead>
        <tr>
          
            <th class="border px-4 py-2 text-left">id</th>
          
            <th class="border px-4 py-2 text-left">pch</th>
          
            <th class="border px-4 py-2 text-left">oid</th>
          
            <th class="border px-4 py-2 text-left">qytyxydm</th>
          
            <th class="border px-4 py-2 text-left">xzqhbm</th>
          
            <th class="border px-4 py-2 text-left">sjtp_cd</th>
          
            <th class="border px-4 py-2 text-left">jsclfs</th>
          
            <th class="border px-4 py-2 text-left">sjbgsj</th>
          
            <th class="border px-4 py-2 text-left">fk_cz_id</th>
          
            <th class="border px-4 py-2 text-left">xjrxm</th>
          
            <th class="border px-4 py-2 text-left">sbyh</th>
          
            <th class="border px-4 py-2 text-left">sffzyh_cd</th>
          
            <th class="border px-4 py-2 text-left">xjsj</th>
          
            <th class="border px-4 py-2 text-left">yhsfzd_cd</th>
          
            <th class="border px-4 py-2 text-left">sjhqfs</th>
          
            <th class="border px-4 py-2 text-left">sjtbr</th>
          
            <th class="border px-4 py-2 text-left">sjcrsj</th>
          
            <th class="border px-4 py-2 text-left">sync_status</th>
          
            <th class="border px-4 py-2 text-left">locked</th>
          
            <th class="border px-4 py-2 text-left">sync_time</th>
          
          <th class="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          
            <td class="border px-4 py-2">{{ item.id }}</td>
          
            <td class="border px-4 py-2">{{ item.pch }}</td>
          
            <td class="border px-4 py-2">{{ item.oid }}</td>
          
            <td class="border px-4 py-2">{{ item.qytyxydm }}</td>
          
            <td class="border px-4 py-2">{{ item.xzqhbm }}</td>
          
            <td class="border px-4 py-2">{{ item.sjtp_cd }}</td>
          
            <td class="border px-4 py-2">{{ item.jsclfs }}</td>
          
            <td class="border px-4 py-2">{{ item.sjbgsj }}</td>
          
            <td class="border px-4 py-2">{{ item.fk_cz_id }}</td>
          
            <td class="border px-4 py-2">{{ item.xjrxm }}</td>
          
            <td class="border px-4 py-2">{{ item.sbyh }}</td>
          
            <td class="border px-4 py-2">{{ item.sffzyh_cd }}</td>
          
            <td class="border px-4 py-2">{{ item.xjsj }}</td>
          
            <td class="border px-4 py-2">{{ item.yhsfzd_cd }}</td>
          
            <td class="border px-4 py-2">{{ item.sjhqfs }}</td>
          
            <td class="border px-4 py-2">{{ item.sjtbr }}</td>
          
            <td class="border px-4 py-2">{{ item.sjcrsj }}</td>
          
            <td class="border px-4 py-2">{{ item.sync_status }}</td>
          
            <td class="border px-4 py-2">{{ item.locked }}</td>
          
            <td class="border px-4 py-2">{{ item.sync_time }}</td>
          
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
  const res = await fetch('/api/ods_p_station_inspection_log')
  items.value = await res.json()
}

const deleteItem = async (id) => {
  await fetch(`/api/ods_p_station_inspection_log/${id}`, { method: 'DELETE' })
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

<template>
  <div>
    <h2 class="text-xl font-bold mb-4">ods_p_station_attr List</h2>
    
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
          
            <th class="border px-4 py-2 text-left">czbh</th>
          
            <th class="border px-4 py-2 text-left">czmc</th>
          
            <th class="border px-4 py-2 text-left">czlx_cd</th>
          
            <th class="border px-4 py-2 text-left">jcnd</th>
          
            <th class="border px-4 py-2 text-left">czdz</th>
          
            <th class="border px-4 py-2 text-left">zdmj</th>
          
            <th class="border px-4 py-2 text-left">geom</th>
          
            <th class="border px-4 py-2 text-left">jzsjylfw</th>
          
            <th class="border px-4 py-2 text-left">fzsjylfw</th>
          
            <th class="border px-4 py-2 text-left">jgysjl_cd</th>
          
            <th class="border px-4 py-2 text-left">geom_bhfw</th>
          
            <th class="border px-4 py-2 text-left">zzcqqps</th>
          
            <th class="border px-4 py-2 text-left">czfzr</th>
          
            <th class="border px-4 py-2 text-left">fzrlxfs</th>
          
            <th class="border px-4 py-2 text-left">bz</th>
          
            <th class="border px-4 py-2 text-left">jsdw</th>
          
            <th class="border px-4 py-2 text-left">jgysrq</th>
          
            <th class="border px-4 py-2 text-left">syzt_cd</th>
          
            <th class="border px-4 py-2 text-left">bh</th>
          
            <th class="border px-4 py-2 text-left">czjz</th>
          
            <th class="border px-4 py-2 text-left">fzrq</th>
          
            <th class="border px-4 py-2 text-left">dqrq</th>
          
            <th class="border px-4 py-2 text-left">rgql</th>
          
            <th class="border px-4 py-2 text-left">cqrj</th>
          
            <th class="border px-4 py-2 text-left">sjhqfs</th>
          
            <th class="border px-4 py-2 text-left">sjtbr</th>
          
            <th class="border px-4 py-2 text-left">sjcrsj</th>
          
            <th class="border px-4 py-2 text-left">geom_lon</th>
          
            <th class="border px-4 py-2 text-left">geom_lat</th>
          
            <th class="border px-4 py-2 text-left">geom_bhfw_lon</th>
          
            <th class="border px-4 py-2 text-left">geom_bhfw_lat</th>
          
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
          
            <td class="border px-4 py-2">{{ item.czbh }}</td>
          
            <td class="border px-4 py-2">{{ item.czmc }}</td>
          
            <td class="border px-4 py-2">{{ item.czlx_cd }}</td>
          
            <td class="border px-4 py-2">{{ item.jcnd }}</td>
          
            <td class="border px-4 py-2">{{ item.czdz }}</td>
          
            <td class="border px-4 py-2">{{ item.zdmj }}</td>
          
            <td class="border px-4 py-2">{{ item.geom }}</td>
          
            <td class="border px-4 py-2">{{ item.jzsjylfw }}</td>
          
            <td class="border px-4 py-2">{{ item.fzsjylfw }}</td>
          
            <td class="border px-4 py-2">{{ item.jgysjl_cd }}</td>
          
            <td class="border px-4 py-2">{{ item.geom_bhfw }}</td>
          
            <td class="border px-4 py-2">{{ item.zzcqqps }}</td>
          
            <td class="border px-4 py-2">{{ item.czfzr }}</td>
          
            <td class="border px-4 py-2">{{ item.fzrlxfs }}</td>
          
            <td class="border px-4 py-2">{{ item.bz }}</td>
          
            <td class="border px-4 py-2">{{ item.jsdw }}</td>
          
            <td class="border px-4 py-2">{{ item.jgysrq }}</td>
          
            <td class="border px-4 py-2">{{ item.syzt_cd }}</td>
          
            <td class="border px-4 py-2">{{ item.bh }}</td>
          
            <td class="border px-4 py-2">{{ item.czjz }}</td>
          
            <td class="border px-4 py-2">{{ item.fzrq }}</td>
          
            <td class="border px-4 py-2">{{ item.dqrq }}</td>
          
            <td class="border px-4 py-2">{{ item.rgql }}</td>
          
            <td class="border px-4 py-2">{{ item.cqrj }}</td>
          
            <td class="border px-4 py-2">{{ item.sjhqfs }}</td>
          
            <td class="border px-4 py-2">{{ item.sjtbr }}</td>
          
            <td class="border px-4 py-2">{{ item.sjcrsj }}</td>
          
            <td class="border px-4 py-2">{{ item.geom_lon }}</td>
          
            <td class="border px-4 py-2">{{ item.geom_lat }}</td>
          
            <td class="border px-4 py-2">{{ item.geom_bhfw_lon }}</td>
          
            <td class="border px-4 py-2">{{ item.geom_bhfw_lat }}</td>
          
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
  const res = await fetch('/api/ods_p_station_attr')
  items.value = await res.json()
}

const deleteItem = async (id) => {
  await fetch(`/api/ods_p_station_attr/${id}`, { method: 'DELETE' })
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

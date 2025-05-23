// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import SysUserList from '../../output/sys_userList.vue'

const routes = [
  { path: '/', component: SysUserList },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

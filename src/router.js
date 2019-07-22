import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import EquipmentBrowser from './views/EquipmentBrowser.vue'
import Alarms from './views/Alarms.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/equipment', name: 'equipment', component: EquipmentBrowser},
    { path: '/alarms', name: 'alarms', component: Alarms}
  ]
})
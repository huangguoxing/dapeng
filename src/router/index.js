import Vue from 'vue'
import VueRouter from 'vue-router'
const DangerousChemicals = () => import('@/views/DangerousChemicals')
const MudTruck = () => import('@/views/MudTruck')
const views = () => import('@/views')
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      component: views,
      children:[{
        path:'',
        name:'DangerousChemicals',
        component: DangerousChemicals
      },{
        path:'MudTruck',
        name:'MudTruck',
        component: MudTruck
      }]
    }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


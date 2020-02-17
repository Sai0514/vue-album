import Vue from 'vue'
import VueRouter from 'vue-router'
import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mine',
    component: Mine
  },
  {
    path: '/find',
    name: 'find',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Find.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

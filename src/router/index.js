import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index'

Vue.use(VueRouter)

  const routes = [
    {
        path: '/index',
        name: 'Index',
        component: Index,
        children:[
            {
                path: '/silent',
                name: 'silent',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '@/views/silent')
            }, {
                path: '/wistful',
                name: 'wistful',
                component: () => import(/* webpackChunkName: "about" */ '@/views/wistful')
            }, {
                path: '/one',
                name: 'one',
                component: () => import(/* webpackChunkName: "about" */ '@/views/one')
            }, {
                path: '/world',
                name: 'world',
                component: () => import(/* webpackChunkName: "about" */ '@/views/world')
            }, {
                path: '/fly',
                name: 'fly',
                component: () => import(/* webpackChunkName: "about" */ '@/views/fly')
            }, {
                path: '/shine',
                name: 'shine',
                component: () => import(/* webpackChunkName: "about" */ '@/views/shine')
            }, {
                path: '/dream',
                name: 'dream',
                component: () => import(/* webpackChunkName: "about" */ '@/views/dream')
            }
        ]
    },{
        path: '/*',
        name: 'Index',
        component: Index,
    }
]

const router = new VueRouter({
  routes
})

export default router

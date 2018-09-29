import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Home=()=>import ('@/components/home')

const Lesson=()=>import ('@/components/lesson')
const Css=()=>import('@/components/lesson/css')
const Js=()=>import('@/components/lesson/js')
const myVue=()=>import('@/components/lesson/vue')

const About=()=>import ('@/components/about')

Vue.use(Router)

const routes=[
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    redirect:'/home',
    children:[
      {
        path:'/home',
        component:Home,
      },
      {
        path:'/lesson',
        component:Lesson,
        children:[
          {
            path:'css',
            component:Css,
          },
          {
            path:'js',
            component:Js,
          },
          {
            path:'vue',
            component:myVue,
          }
        ]
      },
    ]
  },
  {
    path:'/about',
    component:About,
  },
]

export default new Router({
  routes,
  linkActiveClass:'current'
})

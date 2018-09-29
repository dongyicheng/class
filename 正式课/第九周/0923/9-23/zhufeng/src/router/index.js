import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/home'
// import Lesson from '@/components/lesson'
// import Css from '@/components/lesson/css'
// import JS from '@/components/lesson/js'
// import MyVue from '@/components/lesson/vue'
// import About from '@/components/about'
const Home = ()=> import('@/components/home');
// const Home = function () {
//   return import('@/components/home')
// }
const Lesson = ()=> import('@/components/lesson');
const Css = () => import('@/components/lesson/css');
const JS = () => import('@/components/lesson/js');
const MyVue = () => import('@/components/lesson/vue');
const About = () => import('@/components/about');
const Login = () => import('@/components/login');

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    redirect: '/home', 
    children: [
      {
        path:'/home',
        component:Home,
        name:'home',
        meta:{
          til:'首页'
        }
      },
      {
        path: '/lesson',
        component: Lesson,
        redirect:'/lesson/css',
        children:[
          {
            path:'/lesson/css',
            component:Css
          },
          {
            path:'js',
            component:JS
          },
          {
            path:'/lesson/vue',
            component: MyVue
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/login',
    component: Login
  }
];
export default new Router({
  routes,
  linkActiveClass:'current'
})

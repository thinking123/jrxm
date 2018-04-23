import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from './user-info'
import store from '@/store'
import {COMMON_CHANGE_LOADING_BAR} from '@/store/mutations'
import {showMessage} from '@/utils'

const Register = () => import(/* webpackChunkName: "register" */'@/views/home/register')
const Login = () => import(/* webpackChunkName: "login" */'@/views/home/login')
const Home = () => import(/* webpackChunkName: "home" */'@/views/home/home')




Vue.use(Router)


const lazyload = asyncComponent => {
  return async () => {
    store.commit(COMMON_CHANGE_LOADING_BAR, true)
    let component = null
    try {
      component = await asyncComponent()
    } catch (e) {
      showMessage(e)
    }

    store.commit(COMMON_CHANGE_LOADING_BAR, false)
    return component
  }
}
const batchModule = module =>{
  module.children.forEach(ch=>{
    if(ch){
      ch.component = lazyload(ch.component)
    }
  })

  return module
}

const router = new Router({
  routes: [
    batchModule(UserInfo),
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }

  ]
})

router.beforeEach((to, from, next) => {
    next()
})


export default router

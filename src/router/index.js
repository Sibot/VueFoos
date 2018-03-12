import Vue from 'vue'
import Router from 'vue-router'
import RegisterGame from '@/components/RegisterGame'
import Blog from '@/components/Blog'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import store from '../vuex/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/game',
      name: 'RegisterGame',
      component: RegisterGame,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next('/signin')
        }
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})

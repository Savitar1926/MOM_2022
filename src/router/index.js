import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/patients',
        name: 'Blogs',
        component: Blogs,
        meta: {
            title: 'Blogs'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            title: 'Register'
        }
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            title: 'Forgot Password'
        }
    },
    {
    path: '/add',
    name: 'add',
    component: () => import('../components/NoteCreate')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/NoteList')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/NoteEdit')
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})



router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}` || Fireblog;
    next()
})
export default router
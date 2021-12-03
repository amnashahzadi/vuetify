import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import topnavbar from '../views/topnavbar.vue';
import signup from '../views/signup.vue';
import login from '../views/login.vue';
import footer from '../views/footer.vue';
// import productList from '../views/productList.vue';
import productCard from '../views/productCard.vue';
// import Mainpage from '../views/Mainpage.vue'
import Category from '../views/Category.vue';
import SingleProduct from '../views/SingleProduct';
// import footer from '../views/footer'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: signup
  },
  {
    path: '/productCard',
    name: 'productCard',
    component: productCard
  },
  // {
  //   path: '/footer',
  //   name: 'footer',
  //   component: footer
  // },
  {
    path: '/SingleProduct',
    name: 'SingleProduct',
    component: SingleProduct
  },
  {
    path: '/Category',
    name: 'Categoryd',
    component: Category
  },
  
  
  {
    path: '/footer',
    name: 'footer',
    component: footer
  },
  {
    path: '/topnavbar',
    name: 'topnavbar',
    component: topnavbar
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/Mainpage',
  //   name: 'Mainpage',
  //   component: Mainpage
  // }
 

 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

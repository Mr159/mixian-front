import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Index.vue"
import Register from "@/views/Register.vue"
import NotFound from "@/views/404.vue"
import Login from "@/views/Login.vue"
import Home from "@/views/Home.vue"
import InfoShow from "@/views/InfoShow.vue"
import Foundlist from "@/views/Foundlist.vue"

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      children:[
        {
          path:"/index",
          component: Home
        },
        {
          path:"/index/home",
          name:"home",
          component:Home
        },
        {
          path:"/index/infoshow",
          name:"infoshow",
          component: InfoShow
        },
        {
          path:"/index/foundlist",
          name:"foundlist",
          component: Foundlist
        }
      ]
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "*",
      name: "notfound",
      component: NotFound
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
    
  ],
  mode:"history"
})
//路由守卫
router.beforeEach((to,from,next)=>{
  if(to.name=="index"){
      if(localStorage.getItem("eleToken")){
          next();
      }else{
        next({
            path:"/login",
            query:{redirect:to.fullPath}
        })
      }
  }else{
      next();
  }

})
export default router;

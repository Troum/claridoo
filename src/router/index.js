import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/register/finishing",
    name: "register.finishing",
    component: () => import("../views/Finishing.vue")
  },
  {
    path: "/register/end",
    name: "register.end",
    component: () => import("../views/End.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router

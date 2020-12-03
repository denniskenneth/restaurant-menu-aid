import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import index from "../components/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    // children: [
    //   {
    //     path: "/restaurant/:id",
    //     name: "restaurant-details",
    //     component:
    //   }
    // ]
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/restaurant/:id",
  //   name: "restaurant-details",
  //   component: index,
  // },
  // {
  //   path: "/Mest",
  //   name: "Mest",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "Mest" */ "../views/Mest.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;

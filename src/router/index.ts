import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import RoomPage from "../views/RoomPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: {
      requiresAuth: true,
      is_admin: true,
      hideFooter: true,
    },
    /*     children: [
        {
          path: "",
          name: "Gerenciamento de Conexões",
          components: { default: Tables },
        },
        {
          path: "/form",
          name: "Formulário",
          components: { default: ConnectionForm },
        },
      ],
    },*/
  },
  {
    path: "/room",
    component: RoomPage,
    meta: {
      requiresAuth: true,
      is_admin: true,
      hideFooter: true,
    },
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});
/*  
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (sessionStorage.getItem("jwt") == null) {
        next({
          path: "/login",
          params: { nextUrl: "/dashboard" },
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });
  */
export default router;

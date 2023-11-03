// router.js

import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../components/HomePage.vue";
import LoginPage from "@/components/LoginPage.vue";
import DashboardPage from "../components/DashboardPage.vue";
import UnauthorizedPage from "../components/UnauthorizedPage.vue";

const routes = [
    { 
        path: '/', 
        component: LoginPage 
    },

    {
        path: "/dashboard",
        component: DashboardPage,
        // meta: {
        //   requiresRole: "admin",
        // },
      },
      {
        path: "/unauthorized",
        name: "unauthorized",
        component: UnauthorizedPage,
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global beforeEnter guard to check RBAC permissions
// router.beforeEach((to, from, next) => {
//   // Check user's role and permissions
//   const userRole = getUserRole(); // Implement your logic to get the user's role
//   const requiredRole = to.meta.requiresRole; // Define required role on route

//   if (userRole === requiredRole) {
//     // User has the required role, proceed
//     next();
//   } else {
//     // User doesn't have the required role, redirect to an unauthorized page
//     next({ name: "unauthorized" }); // Create an unauthorized route
//   }
// });

export default router;

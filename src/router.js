// router.js

import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";

const routes = [
    { 
        path: '/', 
        component: LoginPage
    },
    { 
        path: '/login',
        name: "login",
        component: LoginPage 
    },
    {
        path: "/welcome",
        name: "welcome",
        component: () => import("./components/WelcomePage.vue"),
      },
      {
        path: "/organization-details",
        name: "organization details",
        component: () => import("./components/OrganizationDetails.vue"),
      },
      {
        path: "/user-details",
        name: "user details",
        component: () => import("./components/UserDetails.vue"),
      },
      {
        path: "/policy-form",
        name: "policy form",
        component: () => import("./components/PolicyForm.vue"),
      },
      {
        path: "/department-form",
        name: "department form",
        component: () => import("./components/DepartmentForm.vue"),
      },

    //   {
    //     path: "*",
    //     name: "404Page",
    //     meta: {
    //       requiresAuth: false,
    //     },
    //     component: () => import("./components/404Page.vue"),
    //   },
      {
        path: "/unauthorized",
        name: "unauthorized",
        meta: {
            requiresRole: "SuperAdmin",
        },
        component: () => import("./components/UnauthorizedPage.vue"),
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// export const routeGuards = (to, from, next) => {
//     const isRootOrLogin = to.path === '/' || to.path === '/login';
//     if (isRootOrLogin) {
//       this.drawer = false;
//     } else {
//       this.drawer = true;
//     }
//     next();
//   };

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

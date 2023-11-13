// router.js

import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("./components/WelcomePage.vue"),
  },
  {
    path: "/user-management",
    name: "user mangement",
    component: () => import("./components/UserManagement.vue"),
  },
  {
    path: "/organization",
    name: "organization",
    component: () => import("./components/OrganizationPage.vue"),
  },
  {
    path: "/location",
    name: "location",
    component: () => import("./components/LocationPage.vue"),
  },
  {
    path: "/department",
    name: "department",
    component: () => import("./components/DepartmentPage.vue"),
  },
  {
    path: "/class-cadre",
    name: "class/cadre",
    component: () => import("./components/ClassCadre.vue"),
  },
  {
    path: "/policy",
    name: "policy",
    component: () => import("./components/PolicyPage.vue"),
  },
  {
    path: "/nodal-officer-mapping",
    name: "nodal officer mapping",
    component: () => import("./components/NodalOfficerMapping.vue"),
  },
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

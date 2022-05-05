const routes = [
  {
    path: "/",
    component: () => import("layouts/MenuLayout.vue"),
    children: [
      { path: "", component: () => import("../pages/IndexPage.vue") },
      { path: '/record', component: () => import('../pages/Record.vue') },
      { path: '/projects', component: () => import('../pages/Projects.vue') },
      { path: '/profile', component: () => import('../pages/Profile.vue') },
      { path: '/affiliates', component: () => import('../pages/Affiliates.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

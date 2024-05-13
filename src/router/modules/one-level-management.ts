export default {
  path: "/one",
  name: "OneLevelManagement",
  meta: {
    icon: "ep:home-filled",
    title: "一级分类管理",
    rank: 11
  },
  children: [
    {
      path: "/one/level",
      name: "OneLevelManagement",
      component: () => import("@/views/one-level-management/index.vue"),
      meta: {
        title: "一级分类管理",
        auths: ["btn_add"]
      }
    }
  ]
} satisfies RouteConfigsTable;

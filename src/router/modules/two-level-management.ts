export default {
  path: "/two",
  name: "TwoLevelManagement",
  meta: {
    icon: "ep:home-filled",
    title: "二级分类管理",
    rank: 12
  },
  children: [
    {
      path: "/two/level",
      name: "TwoLevelManagement",
      component: () => import("@/views/two-level-management/index.vue"),
      meta: {
        title: "二级分类管理"
      }
    }
  ]
} satisfies RouteConfigsTable;

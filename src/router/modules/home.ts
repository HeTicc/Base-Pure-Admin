const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "PositionManagement",
  component: Layout,
  redirect: "/position",
  meta: {
    icon: "ep:home-filled",
    title: "点位管理",
    rank: 0
  },
  children: [
    {
      path: "/position",
      name: "PositionManagement",
      component: () => import("@/views/position-management/index.vue"),
      meta: {
        title: "点位管理"
      }
    }
  ]
} satisfies RouteConfigsTable;

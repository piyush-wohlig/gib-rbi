<template>
  <v-app>
    <SidebarLayout
      @drawerEvent="drawer = !drawer"
      v-if="$route.path !== '/' && $route.path !== '/login'"
    />
    
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SidebarLayout from "./layout/SidebarLayout.vue";
export default {
  name: "App",
  components: {
    SidebarLayout,
  },

  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
  methods: {
    // toggleSidebar() {
    //   this.$refs.sidebar.toggleSidebar();
    // },
  },
};
</script>

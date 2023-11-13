<template>
  <v-app>
    <CommonHeader
      @drawerEvent="drawer = !drawer"
      v-if="$route.path !== '/' && $route.path !== '/login'"
    />
    
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CommonHeader from "@/common/header/CommonHeader.vue";
export default {
  name: "App",
  components: {
    CommonHeader,
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

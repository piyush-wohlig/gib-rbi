<template>
  <v-navigation-drawer v-bind="drawer" app style="background-color: #b0e4e1">
    <v-img :src="require('@/assets/images/global-logo.png')"> </v-img>
    <v-divider></v-divider>
    <v-list>
      <router-link
        v-for="link in routeLinks"
        :key="link.path"
        :to="link.path"
        style="color: white"
        class="list-item"
      >
        <v-list-item-content>
          <v-list-item-title class="d-flex align-center side-items">
            <v-icon class="mr-2">{{ link.icon }}</v-icon>
            <span>{{ link.text }}</span>
          </v-list-item-title>
        </v-list-item-content>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DashboardLayout",
  props: ["drawer"],
  computed: {
    routeLinks() {
      return [
        {
          path: "/organization-details",
          icon: "mdi-microsoft-windows",
          text: "Organization Details",
        },
        { path: "/user-details", icon: "mdi-account", text: "User Details" },
        {
          path: "/policy-form",
          icon: "mdi-clipboard-list-outline",
          text: "Policy Form",
        },
        {
          path: "/department-form",
          icon: "mdi-card-account-details-outline",
          text: "Department Form",
        },
      ];
    },
  },
};
</script>

<style scoped>
.side-items {
  padding: 18px;
  color: #213468;
}
a {
  text-decoration: none;
}
a :hover {
  color: white !important;
}
.side-items:hover {
  cursor: pointer;
  background-color: #213468;
}
</style>

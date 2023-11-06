<template>
  <v-navigation-drawer v-bind="drawer" app style="background-color: #283959">
    <v-img :src="require('@/assets/images/global-logo.png')"> </v-img>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="[icon, text] in links"
        :key="icon"
        link
        style="color: white"
        class="list-item"
      >
        <v-list-item-content>
          <v-list-item-title class="d-flex align-center">
            <v-icon class="mr-2">{{ icon }}</v-icon>
            <span>{{ text }}</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DashboardLayout",
  props: ["drawer"],
  data() {
    return {
      links: [
        ["mdi-microsoft-windows", "Organization Details"],
        ["mdi-account", "User Details"],
        ["mdi-clipboard-list-outline", "Policy Form"],
        ["mdi-card-account-details-outline", "Department Form"],
      ],
    };
  },
};
</script>

<style scoped>
.list-item:hover {
  background-color: red;
}
</style>

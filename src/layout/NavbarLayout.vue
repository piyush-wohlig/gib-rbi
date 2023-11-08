<template>
  <div>
    <div class="avtarDesktop">
      <v-avatar id="menu-activator" v-on="on" class="float-right pr-3">
        <v-img
          src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
          alt="User Avatar"
        ></v-img>
      </v-avatar>

      <v-menu activator="#menu-activator">
        <v-list>
          <v-list-item
            v-for="(item, index) in dropdownItems"
            :key="index"
            :value="index"
          >
            <v-list-item-title class="my-2"
              >welcome! {{ item.title1 }}</v-list-item-title
            >
            <hr />
            <router-link to="/login">
              <v-list-item-title class="my-2">{{
                item.title2
              }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <!-- <v-app-bar app elevate-on-scroll elevation="3" color="white">
      <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-avatar id="menu-activator" v-on="on" class="pr-3 dropdown">
            <v-img
              src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              alt="User Avatar"
            ></v-img>
          </v-avatar>
        </template>
        <v-menu activator="#menu-activator">
          <v-list>
            <v-list-item
              v-for="(item, index) in dropdownItems"
              :key="index"
              @click="handleItemClick(item)"
            >
              <v-list-item-title>{{ item.title1 }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-menu>
    </v-app-bar> -->
  </div>
</template>

<script>
export default {
  name: "NavbarLayout",
  data() {
    return {
      dropdownItems: [{ title1: "JOHN", title2: "Logout" }],
    };
  },
  methods: {
    handleItemClick(item) {
      console.log("Clicked on:", item.text);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .avtarDesktop {
    display: none;
  }
}
a {
  text-decoration: none;
}
</style>

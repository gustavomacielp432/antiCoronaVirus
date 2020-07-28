<template>
  <v-container>
    <Menu :menus="menus"/>
    <router-view ></router-view>
  </v-container>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY" type="text/javascript"></script>
<script>
import Menu from "./Menu";
import MenuModel from "./models/Menu";

export default {
  components: {
    Menu,
  },
  computed: {
    menus() {
      return [
        new MenuModel("Menu", "mdi-menu", "", [
          new MenuModel("Mapa", "mdi-google-maps", "maps"),
        ]),
        new MenuModel("Admin page", "mdi-wrench", "adminPages"),
        new MenuModel("Help", "mdi-help", "help"),
        new MenuModel("Sair", "mdi-exit-to-app", "login"),
      ];
    },
  },
  created() {},

  data: () => ({}),
};
</script>

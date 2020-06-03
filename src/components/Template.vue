<template>
  <v-container>
    <Menu :menus="menus"/>
    <router-view ></router-view>
  </v-container>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRYA4kZPf8A9E5E-_Oj7csLiRmppBRSV8" type="text/javascript"></script>
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
        new MenuModel("Hello World", "mdi-home", "hello-world"),
        new MenuModel("Sair", "mdi-exit-to-app", "login"),
      ];
    },
  },
  created() {},

  data: () => ({}),
};
</script>

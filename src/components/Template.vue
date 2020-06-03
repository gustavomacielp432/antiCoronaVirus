<template>
  <v-container>
    <Menu/>
    <router-view></router-view>
  </v-container>
</template>
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
        new MenuModel("Hello World", "hello-world", "hello-world")
      ];
    }
  },
  created(){
      console.log('teste')
  },

  data: () => ({}),
};
</script>
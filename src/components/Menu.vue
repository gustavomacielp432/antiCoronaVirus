<template>
  <v-navigation-drawer permanent expand-on-hover app dark class="text-white">
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/lego/0.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title>Gustavo Maciel Pimenta</v-list-item-title>
          <v-list-item-subtitle
            >gustavomacielp432@gmail.com</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list v-for="menu in menus" :key="menu.route" dense>
      <v-list-group v-if="menu.submenu.length > 0">
        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="submenu in menu.submenu" :key="submenu.route">
          <v-list-item-icon>
            <v-icon>{{ submenu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link :to="{ name: submenu.route }">
              <span>{{ submenu.title }}</span>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-item v-else>
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <router-link :to="{ name: menu.route }">
            <span>{{ menu.title }}</span>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Menu from "./models/Menu";
export default {
  props: {
    menus: {
      required: true,
      types: [Array, Menu],
    },
  },
};
</script>
<style>
.v-application a {
  color: white;
}
</style>

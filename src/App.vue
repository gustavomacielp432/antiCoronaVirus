<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { routes } from "./routes/routes.js";

export default {
  name: "App",
  data: () => ({
    routes,
  }),

  metaInfo: {
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no",
      },
    ],
  },
};
</script>

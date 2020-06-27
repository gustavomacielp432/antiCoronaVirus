<template>
  <div class="container white pa-0">
    <div style="height:60px"></div>

    <div class="text-center pa-3 pt-4">
      <span class="title font-weight-regular"
        >Em possiveis casos de contaminação entre em contato, através dos
        telefones:</span
      >
    </div>
    <div class="text-center pb-2">
      <v-flex class="pb-3">
        <v-btn large class="checkin-text" href="tel:31985558290">
          <v-icon class="checkin-text">mdi-phone</v-icon>
          <span class="font-weight-regular title pl-2">(31) 98555-8290</span>
        </v-btn>
      </v-flex>
      <v-flex class="pb-3">
        <v-btn
          large
          class="colorBtn"
          href="https://api.whatsapp.com/send?phone=5531971277538"
        >
          <v-icon left>mdi-whatsapp</v-icon>
          <span class="font-weight-regular title">Whatsapp 24h</span>
        </v-btn>
      </v-flex>
    </div>

    <v-divider class="mx-3 my-4"></v-divider>

    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(pergunta, i) in perguntas" :key="i">
        <v-expansion-panel-header>{{ pergunta.p }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ pergunta.r }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perguntas: [
        { p: "teste pergunta", r: "teste resposta" },
        { p: "teste pergunta", r: "teste resposta" },
      ],
    };
  },
  mounted() {
    console.log(this.perguntas.cadastro);
  },
};
</script>

<style scoped>
.menu {
  position: fixed;
  top: 0px;
  z-index: 1;
}
.colorSelectedBack {
  background-color: var(--secondary-color);
}
.sizeTop {
  height: 48px;
}

.bottom {
  margin-bottom: 60px;
}

.container {
  position: relative;
  height: 100vh;
}

.checkin-text {
  color: var(--secondary-color);
  text-decoration: none;
  text-transform: none;
}

.colorBtn {
  text-decoration: none;
  text-transform: none;
  color: var(--primary-color) !important;
}
</style>

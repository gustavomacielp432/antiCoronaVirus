<template>
  <div class="admin-pages">
    <TituloDaPagina icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia" />
    <div class="stats">
      <Stat title="Lojas" :value="stat.lojas" icon="fa fa-shopping-bag" color="#d54d50" />
      <Stat title="Produtos" :value="stat.produtos" icon="fa fa-file" color="#3bc480" />
      <Stat title="Usuarios" :value="stat.usuarios" icon="fa fa-user" color="#3282cd" />
    </div>

    <div class="admin-pages-tabs mt-3 mb -3">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Loja" active>
            <LojaPage />
          </b-tab>

          <b-tab title="Produto">
            <ProdutosPages />
          </b-tab>

          <b-tab title="Usuario">
            <UsuarioPage />
          </b-tab>
          
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>


<script>
import TituloDaPagina from "../template/TituloDaPagina";

import LojaPage from "./LojaPage";
import ProdutosPages from "./ProdutosPages";
import UsuarioPage from "./UsuarioPage";


import Stat from "../home/Stat";
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "AdminPages",
  components: { TituloDaPagina, Stat, LojaPage, ProdutosPages, UsuarioPage },
  data: function() {
    return {
      stat: {}
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then(res => (this.stat = res.data));
    }
  },
  mounted() {
    this.getStats();
  }
};
</script>


<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
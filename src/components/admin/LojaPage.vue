<template>
  <div class="loja-page">
    <b-form>
      <input id="loja-id" type="hidden" v-model="loja.id" />

      <b-row>
        <b-col md="3" sm="12">
          <b-form-group label="Nome:" label-for="loja-Nome">
            <b-form-input
              id="loja-Nome"
              type="text"
              v-model="loja.loja"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome do Loja..."
            />
          </b-form-group>
        </b-col>

        <b-col md="3" sm="12">
          <b-form-group label="Código:" label-for="loja-codigo">
            <b-form-input
              id="loja-codigo"
              type="text"
              v-model="loja.codigo"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o código do Loja..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Cidade:" label-for="loja-cidade">
            <b-form-input
              id="loja-cidade"
              type="text"
              v-model="loja.cidade"
              required
              placeholder="Digite a cidade..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Bairro:" label-for="loja-bairro">
            <b-form-input
              id="loja-bairro"
              type="text"
              v-model="loja.bairro"
              required
              placeholder="Confirme a bairro..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Rua:" label-for="loja-rua">
            <b-form-input
              id="loja-rua"
              type="text"
              v-model="loja.rua"
              required
              placeholder="Digite o rua..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Número:" label-for="loja-numero">
            <b-form-input
              id="loja-numero"
              type="text"
              v-model="loja.numero"
              required
              placeholder="numero do Loja..."
            />
          </b-form-group>
        </b-col>

        <b-form-group label="Produto:" label-for="loja-idproduto">
          <b-form-select
            v-if="mode === 'save'"
            id="loja-idProduto"
            :options="produtos"
            v-model="loja.idProduto"
          />
          <b-form-input v-else id="loja-idProduto" type="text" v-model="Produto.path" readonly />
        </b-form-group>
<!-- 
        <b-col md="2" sm="12">
          <b-form-group label="Produto:" label-for="data Do Exame">
            <b-form-input
              id="loja-idProduto"
              type="number"
              v-model="loja.idProduto"
              required
              placeholder="idProduto do Loja..."
            />
          </b-form-group>
        </b-col> -->

        <b-col xs="12">
          <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-col>
      </b-row>
    </b-form>

    <b-table hover striped :items="lojas" :fields="campos">
      <template slot="cell(actions)" slot-scope="data">
        <b-btn variant="warning" @click="loadloja(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-btn>
        <b-button variant="danger" @click="loadloja(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>

        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limite" />

  </div>
</template>


<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";
 


export default {
  name: "LojaPage",
  data: function() {
    return {
      mode: "save",
      loja: {},
      page :1,
      limite:0,
      count:0, 
      produtos: [],
      lojas: [],
      campos: [
        { key: "id", label: "Código", sortable: true },
        { key: "loja", label: "Loja", sortable: true },
        { key: "codigo", label: "Codigo da Loja", sortable: true },
        { key: "cidade", label: "Cidade", sortable: true },
        { key: "bairro", label: "Bairro", sortable: true },
        { key: "rua", label: "Rua", sortable: true },
        { key: "numero", label: "Número", sortable: true },
        { key: "nome", label: "Produto", sortable: true },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    loadlojas() {
      const url = `${baseApiUrl}/lojas`;
      axios.get(url).then(res => {
        //this.lojas = res.data;

        this.lojas = res.data.map(loja => {
          return { ...loja, value: loja.id, text: loja.idProduto };
        });
      });
    },

    LoadProdutos() {
      const url = `${baseApiUrl}/produtos`;
      axios.get(url).then(res => {
      console.log()

        this.produtos = res.data.map(produtos => {
              console.log( this.produtos )
          return { value: produtos.id, text: `${produtos.id} - ${produtos.nome}`  }
 
        })
      })
    },
    

    reset() {
      this.mode = "save";
      this.loja = {};
      this.loadlojas();
    },
    save() {
      const method = this.loja.id ? "put" : "post";
      const id = this.loja.id ? `/${this.loja.id}` : "";
      axios[method](`${baseApiUrl}/lojas${id}`, this.loja)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.loja.id;
      axios
        .delete(`${baseApiUrl}/lojas/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadloja(loja, mode = "save") {
      this.mode = mode;
      this.loja = { ...loja };
    }
  },
  mounted() {
    this.LoadProdutos()
    this.loadlojas();
  }
};
</script>

<style>
</style>
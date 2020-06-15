
<template>
  <div class="produtos-pages">
    <b-form>
      <input id="produto-id" type="hidden" v-model="produto.id" />

      <b-row>
        <b-col md="3" sm="12">
          <b-form-group label="Nome Do Produto:" label-for="produto-name">
            <b-form-input
              id="produto-nome"
              type="text"
              v-model="produto.nome"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome do Produto..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Codigo:" label-for="produto-codigo">
            <b-form-input
              id="produto-codigo"
              type="text"
              v-model="produto.codigo"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o código do Produto..."
            />
          </b-form-group>
        </b-col>

        <!-- definir o valor  -->
        <b-col md="2" sm="12">
          <b-form-group label="Tipo de Produto:" label-for="produto-tipoProduto">
            <b-form-input
              id="produto-tipoProduto"
              type="text"
              v-model="produto.tipoProduto"
              required
            />
          </b-form-group>
        </b-col>

        <!-- termino definir o valor  -->

        <b-col md="2" sm="12">
          <b-form-group label="Marca:" label-for="produto-marca">
            <b-form-input
              id="produto-marca"
              type="text"
              v-model="produto.marca"
              required
              placeholder="Informe o marca..."
            />
          </b-form-group>
        </b-col>

        <b-col md="1" sm="12">
          <b-form-group label="Preço:" label-for="produto-preco">
            <b-form-input
              id="produto-preco"
              type="number"
              v-model="produto.preco"
              required
              placeholder="preco do Produto..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-col xs="12">
        <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
        <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
        <b-button class="ml-2" @click="reset">Cancelar</b-button>
      </b-col>
    </b-form>

    <b-table  id="dados" hover striped :items="produtos" :fields="campos" class="mt-3 mb-3">
      <template slot="cell(actions)" slot-scope="data">
        <b-btn variant="warning" @click="loadProduto(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-btn>

        <b-button variant="danger" @click="loadProduto(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>

 <b-pagination v-model="page" :total-rows="count" :per-page="3" aria-controls="dados" ></b-pagination>

         

  </div>
</template>


<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "ProdutosPages",
  data: function() {
    return {
      mode: "save",
      produto: {},
      page :1,
      limite:2,
      count: 100, 
      produtos: [],
      campos: [
        { key: "id", label: "Código", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "codigo", label: "Código", sortable: true },
        { key: "tipoProduto", label: "Tipo Do Produto", sortable: true },
        { key: "marca", label: "Marca", sortable: true },
        { key: "preco", label: "Preco", sortable: true },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    loadProdutos() {
      console.log(this.page)
      const url = `${baseApiUrl}/produtos?page=${this.page}`;
      axios.get(url).then(res => {
        this.produtos = res.data;
      });
    },
    reset() {
      this.mode = "save";
      this.produto = {};
      this.loadProdutos();
    },
    save() {
       const method = this.produto.id ? "put" : "post";
       const id = this.produto.id ? `/${this.produto.id}` : "";
      axios[method](`${baseApiUrl}/produtos${id}`, this.produto)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.produto.id;
      axios
        .delete(`${baseApiUrl}/produtos/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadProduto(produto, mode = "save") {
      this.mode = mode;
      this.produto = { ...produto };
    }
  },watch: {
        page() {
           console.log(this.page)
         this.loadProdutos()
        }
    },
  mounted() {
    this.loadProdutos();
  }
};
</script>

<style>
</style>

<template >
  <div class="usuario-page" >
    <b-form class="mt-3 mb -3">
      <input id="user-id" type="hidden" v-model="user.id" />

      <b-row>
        <b-col md="3" sm="12">
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input
              id="user-name"
              type="text"
              v-model="user.nome"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome do Usuário..."
            />
          </b-form-group>
        </b-col>

        <b-col md="3" sm="12">
          <b-form-group label="E-mail:" label-for="user-email">
            <b-form-input
              id="user-email"
              type="text"
              v-model="user.email"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o E-mail do Usuário..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Senha:" label-for="user-senha">
            <b-form-input
              id="user-senha"
              type="password"
              v-model="user.senha"
              required
              placeholder="Digite a senha..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Confirmar Senha:" label-for="user-senha">
            <b-form-input
              id="user-senha"
              type="password"
              v-model="user.confirmaSenha"
              required
              placeholder="Confirme a senha..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Telefone:" label-for="user-telefone">
            <b-form-input
              id="user-telefone"
              type="text"
              v-model="user.telefone"
              required
              placeholder="Digite o Telefone..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Cpf:" label-for="user-cpf">
            <b-form-input
              id="user-cpf"
              type="text"
              v-model="user.cpf"
              required
              placeholder="Cpf do Usuário..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Rg:" label-for="data Do Exame">
            <b-form-input
              id="user-rg"
              type="text"
              v-model="user.rg"
              required
              placeholder="Rg do Usuário..."
            />
          </b-form-group>
        </b-col>

        <b-col md="1" sm="12">
          <b-form-group label="Idade" label-for="user-idade">
            <b-form-input
              id="user-idade"
              type="number"
              v-model="user.idade"
              required
              placeholder="-"
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Cidade:" label-for="user-cidade">
            <b-form-input
              id="user-cidade"
              type="text"
              v-model="user.cidade"
              required
              placeholder="Cidade Usuário..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Bairro:" label-for="bairro Do usuario">
            <b-form-input
              id="user-bairro"
              type="text"
              v-model="user.bairro"
              required
              placeholder="Bairro do Usuário..."
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Rua" label-for="user-bairro">
            <b-form-input
              id="user-bairro"
              type="text"
              v-model="user.rua"
              required
              placeholder="Rua do Usuário..."
            />
          </b-form-group>
        </b-col>

        <b-col md="1" sm="12">
          <b-form-group label="Número" label-for="user-numero">
            <b-form-input
              id="user-numero"
              type="number"
              v-model="user.numero"
              required
              placeholder="-"
            />
          </b-form-group>
        </b-col>

        <b-col md="2" sm="12">
          <b-form-group label="Complemento" label-for="user-complemento">
            <b-form-input
              id="user-complemento"
              type="text"
              v-model="user.complemento"
              required
              placeholder="Complemento"
            />
          </b-form-group>
        </b-col>


 
        <b-col md="2" sm="12">
          <b-form-group label="Data Do Exame " label-for="user-data-do-exame">
            <b-form-input
              id="user-data-do-exame"
              type="date-local"
              v-model="user.dataDoExame"
              required
              placeholder="__-__-___ "
            />
          </b-form-group>
        </b-col>
 
        <b-form-checkbox 
          id="ResultadoDoExame"
          v-show="mode === 'save'"
          v-model="user.ResultadoDoExame"
          class="mt-5 mb-1"
        >Resultado Do Exame Positivo?</b-form-checkbox>
      </b-row>

      <b-col xs="12" class="mt-3 mb-3">
        <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
        <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
        <b-button class="ml-2" @click="reset">Cancelar</b-button>
      </b-col>
    </b-form>

    <b-table hover striped :items="users" :fields="campos">
      <template slot="cell(actions)" slot-scope="data">
        <b-btn variant="warning" @click="loadUser(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-btn>
        <b-button variant="danger" @click="loadUser(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table> 

        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="2" />

  </div>
</template>


<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "UsuarioPage",
  data: function() {
    return {
      mode: "save",
      user: {},
          page :1,
      limite:0,
      count:0, 
      users: [],
      campos: [
        { key: "id", label: "Código", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "idade", label: "Idade", sortable: true },
        { key: "dataDoExame", label: "Data Do Exame", sortable: true },
        { key: "bairro", label: "Bairro", sortable: true },
        { key: "rua", label: "Rua", sortable: true },
        { key: "numero", label: "Número", sortable: true },
        { key: "actions", label: "Ações" }
      ]
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/usuarios`;
      axios.get(url).then(res => {
        this.users = res.data;
      });
    },
    reset() {
      this.mode = "save";
      this.user = {};
      this.loadUsers();
    },
    save() {
      const method = this.user.id ? "put" : "post";
      const id = this.user.id ? `/${this.user.id}` : "";
      axios[method](`${baseApiUrl}/usuarios${id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.user.id;
      axios
        .delete(`${baseApiUrl}/usuarios/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadUser(user, mode = "save") {
      this.mode = mode;
      this.user = { ...user };
    }
  }, 
   watch: {
        page() {
         
            //this.loadArticles()
        }
    },
  mounted() {
    this.loadUsers();
  }
//   ,format(value, event) {
//  return moment(value).format('DD-MM-YYYY').tz('Europe/Rome')
// },
};
</script>

<style>
</style>
<template>
  <v-card width="400" class="ma-auto ">
    <v-card-title class="pb-0">
      <h1>Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Username" prepend-icon="mdi-account-circle" v-model="usuario"/>
        <v-text-field
          v-model="senha"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success">Register</v-btn>
      <v-btn color="info" @click="login">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import LocaisVisitados from "./models/LocaisVisitados"
import { baseApiUrl } from "@/global";
import axios from "axios";
export default {
  data () {
    return {
      showPassword: false,
      usuario: "",
      senha: ""
    }
  },
  methods: {
    async geolocate() {
      return await this.$getLocation()
      .then(async coordinates => {
        return await this.$http
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=AIzaSyDRYA4kZPf8A9E5E-_Oj7csLiRmppBRSV8&language=pt-BR`
        )
        .then((response) => {
          return response.body.results[0];
        });
      });
    },
    async login(){
      let localizacao = await this.geolocate();
      let localVisitado =  new LocaisVisitados();
      localVisitado.user_id = 1
      localVisitado.lat =  localizacao.geometry.location.lat
      localVisitado.lng = localizacao.geometry.location.lng
      localVisitado.cep = localizacao.address_components[localizacao.address_components.length-1].long_name
      localVisitado.cep = localVisitado.cep.replace('-', '')
      axios.post(`${baseApiUrl}/localVisitado`, localVisitado)
        .then((res) => {
          console.log(res)
        });
      this.$router.push({ name: 'maps' })
    }
  }
}
</script>
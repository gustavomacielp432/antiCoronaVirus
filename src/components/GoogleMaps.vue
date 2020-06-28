/* eslint-disable no-undef */
<template>
  <div>
    <div class="google-map" ref="mapa"></div>
    <div class="legenda py-1 px-2 blue white--text font-weight-medium">
      <div>
        <img
          style="height:22px;"
          src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        />Destino
        <img
          style="height:22px;"
          src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        />Origem
      </div>
      <v-spacer></v-spacer>
      <div>
        <!-- Distância:  -->
      </div>
    </div>
    <v-dialog v-model="visitouAreaRisco" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Potencial risco!</span>
        </v-card-title>
        <v-card-text>
          Atenção você visitou uma area de risco de infecção nos ultimos dias,
          favor realizar o exame para verificar possível infecção
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="visitouAreaRisco = false"
            >Fechar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { baseApiUrl } from "@/global";
import axios from "axios";
export default {
  name: "google-map",
  props: {
    destination: {
      required: false,
    },
    showRoute: {
      required: false,
    },
    origin: {
      required: false,
    },
  },

  watch: {
    showRoute() {
      if (this.showRoute) this.marcarMapa();
    },
  },

  data: function() {
    return {
      directionsRenderer: null,
      directionsService: null,
      map: null,
      locais: [],
      lastLocais: [],
      visitouAreaRisco: false,
    };
  },

  mounted: async function() {
    await this.initMap();
    await this.getLastLocais();
    await this.marcaUsuarioInfectados();
    await this.verificaInfeccao();
  },

  methods: {
    verificaInfeccao() {
      this.lastLocais.map((lastLocal) => {
        let localInfectadoVisitado = this.locais.filter((element) => {
          return element.cep == lastLocal.cep;
        });
        if (localInfectadoVisitado.length > 0) {
          this.visitouAreaRisco = true;
        }
      });
    },
    getLocaisContaminacao() {
      return axios.get(`${baseApiUrl}/casos`).then((res) => {
        return res.data;
      });
    },
    async getLastLocais() {
      this.lastLocais = await axios
        .get(`${baseApiUrl}/lastLocaisVisitados`)
        .then((res) => {
          return res.data;
        });
    },
    initMap() {
      const element = this.$refs.mapa;
      const options = {
        zoom: 8,
        // eslint-disable-next-line no-undef
        center: new google.maps.LatLng(-19.8157, -43.9542),
      };
      // eslint-disable-next-line no-undef
      this.map = new google.maps.Map(element, options);
      // eslint-disable-next-line no-undef
      this.directionsRenderer = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: "blue",
          strokeOpacity: 0.7,
          strokeWeight: 3,
        },
        suppressMarkers: true,
      });
      // eslint-disable-next-line no-undef
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer.setMap(this.map);
    },

    marcarMapa() {
      // eslint-disable-next-line no-undef
      new google.maps.Marker({
        position: this.origin.geometry.location,
        title: "Origem",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/newMark32.png",
        },
        map: this.map,
      });
      // eslint-disable-next-line no-undef
      new google.maps.Marker({
        position: this.destination.geometry.location,
        title: "Destino",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        },
        map: this.map,
      });

      this.calculateAndDisplayRoute(
        this.directionsService,
        this.directionsRenderer,
        this.origin,
        this.destination
      );
    },

    calculateAndDisplayRoute(
      directionsService,
      directionsRenderer,
      origin,
      destination
    ) {
      directionsService.route(
        {
          origin: origin.formatted_address,
          destination: destination.formatted_address,
          travelMode: "DRIVING",
        },
        function(response, status) {
          if (status == "OK") {
            directionsRenderer.setDirections(response);
          } else {
            console.log("Directions request failed due to " + status);
            response.request.destination = this.destination;
            directionsRenderer.setDirections(response);
          }
        }
      );
    },

    async marcaUsuarioInfectados() {
      this.locais = await this.getLocaisContaminacao();
      this.locais.map((local) => {
        // eslint-disable-next-line no-undef
        new google.maps.Marker({
          // eslint-disable-next-line no-undef
          position: new google.maps.LatLng(local.Lat, local.Lng),
          title: "area infectada",
          icon: {
            url: "https://anticoronaviruss.s3.amazonaws.com/red_dot.png",
          },
          map: this.map,
        });
      });
    },
  },
};
</script>

<style scoped>
.google-map {
  width: 99.8%;
  height: 366px;
  margin: 0 auto;
  background: gray;
}
.legenda {
  width: 100%;
  height: 30px;
  display: flex;
}
</style>

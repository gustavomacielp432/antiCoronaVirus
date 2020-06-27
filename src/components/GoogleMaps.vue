/* eslint-disable no-undef */
<template>
  <div>
    <div class="google-map" ref="mapa"></div>
    <div class="legenda py-1 px-2 blue white--text font-weight-medium">
      <div>
        <img style="height:22px;" src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" />Destino
        <img style="height:22px;" src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" />Origem
      </div>
      <v-spacer></v-spacer>
      <div>
        <!-- Distância:  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "google-map",
  props: {
    destination: {
      required: false
    },
    showRoute: {
      required: false
    },
    origin: {
      required: false
    }
  },

  watch: {
    showRoute() {
      if (this.showRoute) this.marcarMapa(), this.marcaUsuarioInfectados();
    }
  },

  data: function() {
    return {
      directionsRenderer: null,
      directionsService: null,
      map: null
    };
  },

  mounted: function() {
    this.initMap();
    if (this.showRoute) this.marcarMapa(), this.marcaUsuarioInfectados();
  },

  methods: {
    initMap() {
      const element = this.$refs.mapa;
      const options = {
        zoom: 14,
        // eslint-disable-next-line no-undef
        center: new google.maps.LatLng(-19.9166813, -43.9344931)
      };
      // eslint-disable-next-line no-undef
      this.map = new google.maps.Map(element, options);
      // eslint-disable-next-line no-undef
      this.directionsRenderer = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: "blue",
          strokeOpacity: 0.7,
          strokeWeight: 3
        },
        suppressMarkers: true
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
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        },
        map: this.map
      });
      // eslint-disable-next-line no-undef
      new google.maps.Marker({
        position: this.destination.geometry.location,
        title: "Destino",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        },
        map: this.map
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
          travelMode: "DRIVING"
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

    //marcaUsuarioInfectados: function (usuarioContaminados) {
    marcaUsuarioInfectados: function() {
      //for( var i = 0; i < usuarioContaminados.length; i++ ){

        // eslint-disable-next-line no-undef
        (marker = new google.maps.Marker({
          //position: new this.google.maps.Map(usuarioContaminados[i].latitude, usuarioContaminados[i].longitude),
          position: new this.google.maps.LatLng(-19.960004, -43.965833),

          map: this.map,
          title: "Infectados",
          icon: {
            url: "https://image.flaticon.com/icons/svg/2746/2746582.svg"
            //url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
          }
        }));
      //}
    }
  }
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

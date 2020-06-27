<template>
  <v-card>
    <!-- <div>
      <h2>Search and add a pin</h2>
      <label>
        <vue-google-autocomplete
          style="width:100%"
          id="map"
          classname="form-control"
          placeholder="Endereço"
          v-model="currentAddress"
          v-on:placechanged="setAddress"
        >
        </vue-google-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br />
    </div> -->
    <br />
    <div class="col-sm-12 col-lg-8 mt-2 px-2">
      <v-card min-height="439px" class="blue h-100">
        <v-card-title class="pa-2 blue">
          <span class="mx-auto font-weight-bold white--text">
            <v-icon dark>mdi-map</v-icon>
          </span>
        </v-card-title>
        <GoogleMaps
          :destination="destination"
          :showRoute="showRoute"
          :origin="origin"
        >
        </GoogleMaps>
      </v-card>
    </div>
  </v-card>
</template>
<script>
import GoogleMaps from "./GoogleMaps";
// import VueGoogleAutocomplete from "vue-google-autocomplete";  
export default {
  components: {
    GoogleMaps,
    // VueGoogleAutocomplete,
  },

  data: () => ({
    destination: "",
    origin: "",
    showRoute: false,
    currentPlace: null,
    places: [],
    markers: [],
    currentAddress: "",
  }),

  mounted() {
    this.geolocate();
  },

  methods: {
    setAddress(addressData, placeResultData, id) {
      console.log(addressData);
      this.currentPlace = placeResultData;
      console.log(id);
    },
    addMarker() {
      if (this.currentPlace) {
        this.destination = this.currentPlace;
        this.showRoute = true;
        this.currentPlace = null;
        this.currentAddress = "";
      }
    },
    geolocate: function() {
      this.$getLocation()
      .then(async coordinates => {
        this.origin = await this.$http
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=AIzaSyDRYA4kZPf8A9E5E-_Oj7csLiRmppBRSV8&language=pt-BR`
        )
        .then((response) => {
          return response.body.results[0];
        });
      });
    },
    listaUsario: function() {
      this.$getLocation()
      .then(async coordinates => {
        this.origin = await this.$http
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=AIzaSyDRYA4kZPf8A9E5E-_Oj7csLiRmppBRSV8&language=pt-BR`
        )
        .then((response) => {
          return response.body.results[0];
        });
      });
    },
  },
};
</script>

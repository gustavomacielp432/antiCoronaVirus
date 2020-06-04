<template>
  <v-card>
    <div>
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
    </div>
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

import GoogleMaps from "./GoogleMaps"
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  components:{
      GoogleMaps,
      VueGoogleAutocomplete
  },
  data: () => ({
    destination: '',
    origin: '',
    showRoute: false,
    currentPlace: null,
    places: [],
    markers: [],
    currentAddress: ''
  }),
  methods:{
    setAddress(addressData, placeResultData, id) {
      console.log(addressData);
      this.currentPlace = placeResultData;
      console.log(id);
    },
    addMarker() {
      if (this.currentPlace) {
        
        if(!this.origin){
          this.origin = this.currentPlace
        }else{
          this.destination = this.currentPlace;
          this.showRoute = true
        }
        // const marker = {
        //   lat: this.currentPlace.geometry.location.lat(),
        //   lng: this.currentPlace.geometry.location.lng(),
        // };
        // this.markers.push({ position: marker });
        // this.places.push(this.currentPlace);
        this.currentPlace = null;
        this.currentAddress = ''
      }
    },
  }
};
</script>

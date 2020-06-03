<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <vue-google-autocomplete
          style="width:100%"
          id="map"
          classname="form-control"
          placeholder="Endereço"
          v-on:placechanged="setAddress"
        >
        </vue-google-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br />
    </div>
    <br />
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  name: "GoogleMap",
  components: {
    VueGoogleAutocomplete,
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
    };
  },

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
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

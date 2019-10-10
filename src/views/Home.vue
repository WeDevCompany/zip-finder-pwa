<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="#ffd205">
        <ion-title>ZipFinder</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ZipSearch v-on:get-zip="getZipInfo" />
      <ZipInfo v-bind:info="info" />
      <ClearInfo v-bind:info="info" v-on:clear-info="clearInfo" />
    </ion-content>
  </div>
</template>

<script>
import ZipSearch from '../components/ZipSearch'
import ZipInfo from '../components/ZipInfo'
import ClearInfo from '../components/ClearInfo'

export default {
  name: 'home',
  components: { ZipSearch, ZipInfo, ClearInfo },
  data() {
    return {
      info: null
    }
  },
  methods: {
    async getZipInfo(zip) {
      const endpoint = new URL(encodeURI(`https://api.zippopotam.us/ES/${zip}`));
      const resp = await fetch(endpoint.toString())

      if (undefined !== resp.status && resp.status == 404) {
        this.showAlert();
      }

      this.info = await resp.json();
    },
    clearInfo() {
      this.info = null
    },
    showAlert() {
        this.$ionic.alertController.create({
            header: "Invalid zip code",
            message: "Please enter a valid ES zip code",
            buttons: ["OK"]
        }).then(resolve => resolve.present())
    }
  }
};
</script>
<style>
  .ion-page ion-toolbar {
    background: #ffd205;
  }
</style>
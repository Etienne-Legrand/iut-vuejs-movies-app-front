<template>
  <v-app>
    <v-app-bar color="teal-darken-4" :image="imageAppBar">
      <v-toolbar-title>
        <router-link :to="{ name: 'home' }" class="text-decoration-none text-white">Movie App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'home' }">Accueil</v-btn>
      <v-btn text :to="{ name: 'create' }">Ajouter un film</v-btn>
    </v-app-bar>
    <v-main class="mt-5 bg-blue-grey-lighten-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import appareil_photo from './assets/appareil_photo.png'

export default {
  name: 'App',

  data: () => ({
    imageAppBar: appareil_photo,
  }),
}
</script>

<style></style>

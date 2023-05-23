<template>
  <v-app>
    <v-app-bar color="teal-darken-4" :image="imageAppBar">
      <v-toolbar-title>
        <router-link :to="{ name: 'home' }" class="text-decoration-none text-white">Movie App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'home' }">Home</v-btn>
      <v-btn text :to="{ name: 'create' }">Ajouter un film</v-btn>
    </v-app-bar>
    <v-main class="mt-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    imageAppBar: require('./../public/images/appareil_photo.png'),
  }),
}
</script>

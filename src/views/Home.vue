<template>
  <div class="movie">
    <!-- Rechercher un film -->
    <v-card class="mx-auto mb-4" color="blue-grey-lighten-4" max-width="600" variant="">
      <v-card-text>
        <v-text-field density="comfortable" variant="solo"
          label="Rechercher un film par son titre, son année ou le nom du réalisateur" append-inner-icon="mdi-magnify"
          single-line hide-details v-model="search"></v-text-field>
      </v-card-text>
    </v-card>

    <!-- Compteur de films -->
    <div class="d-flex justify-center mb-4">
      <v-chip color="grey-darken-4" size="large" prepend-icon="mdi-movie-roll">
        {{ numberOfMovies }} films disponibles
      </v-chip>
    </div>

    <!-- Liste des films -->
    <v-sheet class="d-flex flex-wrap justify-center bg-blue-grey-lighten-4">
      <v-sheet v-for="movie in filteredMovies" :key="movie._id" class="ma-2 bg-blue-grey-lighten-4">
        <MovieItem :movie="movie" />
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue';
import axios from 'axios';
import router from '@/router';

export default {
  name: 'App',
  components: {
    MovieItem,
  },
  data() {
    return {
      movies: [],
      newMovie: { titre: '', anneeDeSortie: '', langue: '', realisateur: { nom: '', nationalite: '', dateDeNaissance: '' }, genre: '', poster: '', rate: null },
      search: "",
    }
  },
  mounted() {
    this.getAllMovies();
  },
  methods: {
    getAllMovies() {
      axios.get(`${import.meta.env.VITE_API_URL}/movies`)
        .then((response) => {
          this.movies = response.data;
          console.log(this.movies);
        })
        .catch(error => {
          console.log(error);
        });
    },
    goToDetailMovie(id) {
      router.push({ name: 'detail', params: { id } });
    },
  },
  computed: {
    numberOfMovies: function () {
      return this.movies.length
    },
    // // Trie les films selon le titre, l'année de sortie ou le réalisateur
    filteredMovies() {
      return this.movies.filter(movie => {
        const { titre, anneeDeSortie, realisateur } = movie;
        const searchString = `${titre} ${anneeDeSortie} ${realisateur.nom}`.toLowerCase();
        return searchString.includes(this.search.toLowerCase());
      });
    }
  }
}
</script>

<style scoped></style>

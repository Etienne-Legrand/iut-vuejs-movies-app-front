<template>
  <div class="movie">
    <!-- <h1>Movie App</h1> -->

    <!-- Rechercher un film -->
    <v-card class="mx-auto mb-10" color="grey-lighten-3" max-width="700">
      <v-card-text>
        <v-text-field density="compact" variant="solo"
          label="Rechercher un film par son titre, sa date de sortie ou le nom du réalisateur"
          append-inner-icon="mdi-magnify" single-line hide-details v-model="search"></v-text-field>
      </v-card-text>
    </v-card>

    <!-- Liste des films -->
    <h3 class="ms-5">Liste des films</h3>
    <v-sheet class="d-flex flex-wrap">
      <v-sheet v-for="movie in filteredMovies" :key="movie._id" class="ma-2">
        <MovieItem :movie="movie" />
      </v-sheet>
    </v-sheet>


    <!-- <p>Première lettre : {{ movieTitleFirstLetter }}</p> -->
    <p>Nombre total de films : {{ numberOfMovies }}</p>
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
      newMovie: { titre: '', anneeDeSortie: '', langue: '', realisateur: { nom: '', nationalite: '', dateDeNaissance: '' }, genre: '', poster: '' },
      search: "",
    }
  },
  mounted() {
    this.getAllMovies();
  },
  methods: {
    getAllMovies() {
      axios.get('http://185.212.226.104/api/movies')
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
        const searchString = `${titre} ${anneeDeSortie} ${realisateur}`.toLowerCase();
        return searchString.includes(this.search.toLowerCase());
      });
    }
  }
}
</script>

<style scoped></style>

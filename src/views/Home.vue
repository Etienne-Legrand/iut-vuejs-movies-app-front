<template>
  <div class="movie">
    <h1>Movie App</h1>

    <!-- Ajouter un film -->
    <router-link :to="{ name: 'create' }">Ajouter un film</router-link>

    <!-- Rechercher un film -->
    <h3>Rechercher un film</h3>
    <div>
      <label for="search">Rechercher : </label>
      <input type="text" v-model="search" id="search">
    </div>

    <!-- Liste des films -->
    <h3>Liste des films</h3>
    <ul>
      <li v-for="movie in filteredMovies" @click="goToDetailMovie(movie._id)" :key="movie._id">
        <MovieItem :movie="movie" />
        <!-- @edit="goToEditMovie(movie._id)" @delete="deleteMovie(movie._id)" -->
      </li>
    </ul>

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
    // movieTitleFirstLetter: function () {
    //   return this.newMovie.titre.charAt(0);
    // },
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

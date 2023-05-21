<template>
  <div class="movie">
    <!-- Ajouter un film -->
    <FormMovie label="Ajouter un film" v-model:titre="newMovie.titre" v-model:anneeDeSortie="newMovie.anneeDeSortie"
      v-model:langue="newMovie.langue" v-model:realisateurNom="newMovie.realisateur.nom"
      v-model:realisateurNationalite="newMovie.realisateur.nationalite"
      v-model:realisateurDateDeNaissance="newMovie.realisateur.dateDeNaissance" v-model:genre="newMovie.genre"
      v-model:poster="newMovie.poster" />
    <button v-on:click="createMovie">Ajouter</button>

    <!-- Rechercher un film -->
    <h3>Rechercher un film</h3>
    <div>
      <label for="search">Rechercher : </label>
      <input type="text" v-model="search" id="search">
    </div>

    <!-- Liste des films -->
    <h3>Liste des films</h3>
    <ul>
      <li v-for="movie in filteredMovies" @click="setDetailMovie(movie)" :key="movie._id">
        <MovieItem :movie="movie" @edit="setEditedMovie(movie)" @delete="deleteMovie(movie._id)" />
      </li>
    </ul>

    <!-- Modifier d'un film -->
    <!-- <div v-if="Object.keys(editedMovie).length !== 0">
      <FormMovie label="Modifier un film" v-model:titre="editedMovie.titre"
        v-model:anneeDeSortie="editedMovie.anneeDeSortie" v-model:langue="editedMovie.langue"
        v-model:realisateurNom="editedMovie.realisateur.nom"
        v-model:realisateurNationalite="editedMovie.realisateur.nationalite"
        v-model:realisateurDateDeNaissance="editedMovie.realisateur.dateDeNaissance" v-model:genre="editedMovie.genre"
        v-model:poster="editedMovie.poster" />
      <button v-on:click="editMovie(editedMovie._id)">Enregistrer</button>
    </div> -->

    <!-- <p>Première lettre : {{ movieTitleFirstLetter }}</p>
    <p>Nombre total de films : {{ numberOfMovies }}</p> -->
  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue';
import FormMovie from '@/components/FormMovie.vue';
import axios from 'axios';
import router from '@/router';

export default {
  name: 'App',
  components: {
    MovieItem,
    FormMovie
  },
  data() {
    return {
      movies: [],
      newMovie: { titre: '', anneeDeSortie: '', langue: '', realisateur: { nom: '', nationalite: '', dateDeNaissance: '' }, genre: '', poster: '' },
      editedMovie: {},
      detailMovie: {},
      search: "",
    }
  },
  mounted() {
    this.getAllMovies();
  },
  methods: {
    createMovie() {
      axios.post('http://185.212.226.104/api/movies', this.newMovie)
        .then(response => {
          console.log(response.data);
          this.getAllMovies();
        })
        .catch(error => {
          console.error(error);
        });
    },
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
    setEditedMovie(movie) {
      this.editedMovie = Object.assign({}, movie); // Copie l'objet movie dans editedMovie
      router.push({ name: 'edit', params: { id: movie._id } });
    },
    editMovie(id) {
      axios.patch(`http://185.212.226.104/api/movies/${id}`, this.editedMovie)
        .then(response => {
          console.log(response.data);
          this.editedMovie = {};
          this.getAllMovies();
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteMovie(id) {
      axios.delete(`http://185.212.226.104/api/movies/${id}`)
        .then(response => {
          console.log(response.data);
          this.getAllMovies();
        })
        .catch(error => {
          console.error(error);
        });

    },
    setDetailMovie(movie) {
      this.detailMovie = movie;
    }
  },
  computed: {
    // movieTitleFirstLetter: function () {
    //   return this.newMovie.titre.charAt(0);
    // },
    // numberOfMovies: function () {
    //   return this.movies.length
    // },
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

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

<template>
  <RouterView />
  <!-- <div class="movie">
    <h3>Ajouter un film</h3>
    <label for="title">Titre : </label><input type="text" v-model="newMovie.titre"><br>
    <label for="anneeDeSortie">Année de sortie : </label><input type="text" v-model="newMovie.anneeDeSortie"><br>
    <label for="realisateur">Réalisateur : </label><input type="text" v-model="newMovie.realisateur"><br>
    <label for="synospsis">Synospsis : </label> <input type="text" v-model="newMovie.synospsis"> <br>
    <button v-on:click="addMovie">Ajouter</button>

    <h3>Rechercher un film</h3>
    <div>
      <label for="search">Rechercher : </label>
      <input type="text" v-model="search" id="search">
    </div>

    <h3>Liste des films</h3>
    <ul>
      <li v-for="(movie, index) in filteredMovies" @click="detailMovieFunc(movie)" :key="movie">
        <MovieItem :movie="movie" :index="index" @edit="preEditMovie" @delete="deleteMovie" />
      </li>
    </ul>

    <div v-if="detailMovie !== {}">
      <h3>Détail du film sélectionné</h3>
      <p>{{ detailMovie.titre }}</p>
      <p>{{ detailMovie.anneeDeSortie }}</p>
      <p>{{ detailMovie.realisateur }}</p>
      <p>{{ detailMovie.synospsis }}</p>
    </div><br>

    <div v-if="editedMovieIndex !== -1">
      <h3>Modifier un film</h3>
      <label for="title">Titre : </label><input type="text" v-model="editedMovie.titre"><br>
      <label for="anneeDeSortie">Année de sortie : </label><input type="text" v-model="editedMovie.anneeDeSortie"><br>
      <label for="realisateur">Réalisateur : </label><input type="text" v-model="editedMovie.realisateur"><br>
      <label for="synospsis">Synospsis : </label> <input type="text" v-model="editedMovie.synospsis"> <br>
      <button v-on:click="editMovie()">Enregistrer</button>
    </div><br><br>

    <p>Première lettre : {{ movieTitleFirstLetter }}</p>
    <p>Nombre total de films : {{ numberOfMovies }}</p>
  </div> -->
</template>

<script>
// import MovieItem from './components/MovieItem.vue';

// export default {
//   name: 'App',
//   components: {
//     MovieItem
//   },
//   data() {
//     return {
//       message: 'Afficher',
//       movies: [
//         { titre: "Film 1", anneeDeSortie: 2000, realisateur: "realisateur1", synospsis: "Ceci est le synospsis du film 1" },
//         { titre: "Film 2", anneeDeSortie: 2001, realisateur: "realisateur2", synospsis: "Ceci est le synospsis du film 2" },
//         { titre: "Film 3", anneeDeSortie: 2002, realisateur: "realisateur3", synospsis: "Ceci est le synospsis du film 3" },
//         { titre: "Film 4", anneeDeSortie: 2003, realisateur: "realisateur4", synospsis: "Ceci est le synospsis du film 4" }
//       ],
//       newMovie: { titre: "", anneeDeSortie: "", realisateur: "", synospsis: "" },
//       editedMovie: {},
//       editedMovieIndex: -1,
//       detailMovie: {},
//       search: "",
//     }
//   },
//   methods: {
//     addMovie: function () {
//       this.movies.push({
//         titre: this.newMovie.titre,
//         anneeDeSortie: this.newMovie.anneeDeSortie,
//         realisateur: this.newMovie.realisateur,
//         synospsis: this.newMovie.synospsis
//       });
//       this.newMovie = { titre: "", anneeDeSortie: "", realisateur: "", synospsis: "" };
//     },
//     preEditMovie: function (index) {
//       this.editedMovie = Object.assign({}, this.movies[index]);
//       this.editedMovieIndex = index;
//     },
//     editMovie: function () {
//       Object.assign(this.movies[this.editedMovieIndex], this.editedMovie);
//       this.editedMovie = {};
//       this.editedMovieIndex = -1;
//     },
//     deleteMovie: function (movie) {
//       this.editedMovieIndex = -1;
//       this.detailMovie = {};
//       this.editedMovie = {};
//       // this.movies = this.movies.filter(item => item !== movie)
//       var index = this.movies.indexOf(movie);
//       if (index !== -1) {
//         this.movies.splice(index, 1);
//       }
//     },
//     detailMovieFunc: function (movie) {
//       this.detailMovie = movie;
//     }
//   },
//   computed: {
//     movieTitleFirstLetter: function () {
//       return this.newMovie.titre.charAt(0);
//     },
//     numberOfMovies: function () {
//       return this.movies.length
//     },
//     // Trie les films selon le titre, l'année de sortie ou le réalisateur
//     filteredMovies: function () {
//       return this.movies.filter(movie => {
//         const { titre, anneeDeSortie, realisateur } = movie;
//         const searchString = `${titre} ${anneeDeSortie} ${realisateur}`.toLowerCase();
//         return searchString.includes(this.search.toLowerCase());
//       });
//     }
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

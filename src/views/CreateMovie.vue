<template>
    <div>
        <FormMovie labelTitre="Ajouter un film" :movie="movie" @getMovie="createMovie" />
    </div>
</template>

<script>
import axios from 'axios';
import FormMovie from '@/components/FormMovie.vue';

export default {
    name: 'App',
    components: {
        FormMovie
    },
    data() {
        return {
            movie: { titre: '', anneeDeSortie: '', langue: '', realisateur: { nom: '', nationalite: '', dateDeNaissance: '' }, genre: '', poster: '' },
        }
    },
    methods: {
        createMovie(movie) {
            // let movie2 = this.getMovieInOMDbAPI(movie);
            console.log(this.getMovieInOMDbAPI(movie));

            axios.post('http://185.212.226.104/api/movies', movie)
                .then(response => {
                    console.log(response.data.titre);
                    this.$router.push({ name: 'home' });
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getMovieInOMDbAPI(movie) {
            if (movie.titre !== '' || movie.anneeDeSortie !== '') {
                axios.get(`http://www.omdbapi.com/?apikey=f081af2b&t=${movie.titre}&y=${movie.anneeDeSortie}`)
                    .then(response => {
                        return response.data;

                    })
                    .catch(error => {
                        console.error(error);
                    });
            }

        },
    },
}
</script>

<style scoped></style>
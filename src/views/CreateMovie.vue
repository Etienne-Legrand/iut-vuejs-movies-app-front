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
            movie: { titre: '', anneeDeSortie: '', langue: '', realisateur: { nom: '', nationalite: '', dateDeNaissance: '' }, genre: '', poster: '', rate: null },
        }
    },
    methods: {
        async createMovie(movie) {
            try {
                if (movie.titre !== '' && movie.anneeDeSortie !== '' && movie.poster === '') {
                    const omdbData = await this.getMovieInOMDbAPI(movie);
                    if (omdbData.Response == 'True') {
                        movie.poster = omdbData.Poster;
                    }
                }
                await axios.post('http://185.212.226.104/api/movies', movie);
                this.$router.push({ name: 'home' });
            } catch (error) {
                console.error(error);
            }
        },
        async getMovieInOMDbAPI(movie) {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=f081af2b&t=${movie.titre}&y=${movie.anneeDeSortie}`);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },

    },
}
</script>

<style scoped></style>
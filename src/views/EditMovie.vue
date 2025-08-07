<template>
    <div v-if="Object.keys(movie).length !== 0">
        <FormMovie labelTitre="Modifier un film" :movie="movie" @getMovie="editMovie" />
    </div>
    <div v-else>
        <h1 class="text-center mt-16">Film introuvable</h1>
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
            movie: {},
        }
    },
    mounted() {
        this.getOneMovie(this.$route.params.id);
    },
    methods: {
        getOneMovie(id) {
            axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`)
                .then((response) => {
                    this.movie = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        async editMovie(movie) {
            try {
                if (movie.titre !== '' && movie.anneeDeSortie !== '' && movie.poster === '') {
                    const omdbData = await this.getMovieInOMDbAPI(movie);
                    movie.poster = omdbData.Poster;
                }
                await axios.patch(`${import.meta.env.VITE_API_URL}/movies/${movie._id}`, movie);
                this.$router.push({ name: 'home' });
            } catch (error) {
                console.error(error);
            }
        },
        async getMovieInOMDbAPI(movie) {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${movie.titre}&y=${movie.anneeDeSortie}`);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
}
</script>

<style scoped></style>
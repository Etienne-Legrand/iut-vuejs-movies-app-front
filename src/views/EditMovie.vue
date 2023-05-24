<template>
    <div v-if="Object.keys(movie).length !== 0">
        <FormMovie labelTitre="Modifier un film" :movie="movie" @getMovie="editMovie" />
    </div>
    <div v-else>
        <p>Film introuvable</p>
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
            axios.get(`http://185.212.226.104/api/movies/${id}`)
                .then((response) => {
                    this.movie = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        // editMovie(movie) {
        //     console.log(this.getMovieInOMDbAPI(movie));
        //     axios.patch(`http://185.212.226.104/api/movies/${movie._id}`, movie)
        //         .then(response => {
        //             console.log(response.data.titre);
        //             // this.$router.push({ name: 'home' });
        //         })
        //         .catch(error => {
        //             console.error(error);
        //         });
        // },
        // getMovieInOMDbAPI(movie) {
        //     // if (movie.titre !== '' || movie.anneeDeSortie !== '') {
        //     axios.get(`http://www.omdbapi.com/?apikey=f081af2b&t=${movie.titre}&y=${movie.anneeDeSortie}`)
        //         .then(response => {
        //             return response.data;
        //         })
        //         .catch(error => {
        //             console.error(error);
        //         });
        // },
        async editMovie(movie) {
            try {
                const omdbData = await this.getMovieInOMDbAPI(movie);
                console.log(omdbData);
                movie.poster = omdbData.Poster;
                // Effectuez le reste de votre logique ici avec les données d'OMDb
                console.log(movie);
                await axios.patch(`http://185.212.226.104/api/movies/${movie._id}`, movie);
                console.log(movie.titre);
            } catch (error) {
                console.error(error);
            }
        },

        getMovieInOMDbAPI(movie) {
            return axios.get(`http://www.omdbapi.com/?apikey=f081af2b&t=${movie.titre}&y=${movie.anneeDeSortie}`)
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
}
</script>

<style scoped></style>
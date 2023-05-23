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
        editMovie(movie) {
            axios.patch(`http://185.212.226.104/api/movies/${movie._id}`, movie)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: 'home' });
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
}
</script>

<style scoped></style>
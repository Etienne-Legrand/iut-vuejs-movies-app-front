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
            axios.post('http://185.212.226.104/api/movies', movie)
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
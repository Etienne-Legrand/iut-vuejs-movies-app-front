<template>
    <div v-if="Object.keys(movie).length !== 0">
        <FormMovie label="Modifier un film" v-model:titre="movie.titre" v-model:anneeDeSortie="movie.anneeDeSortie"
            v-model:langue="movie.langue" v-model:realisateurNom="movie.realisateur.nom"
            v-model:realisateurNationalite="movie.realisateur.nationalite"
            v-model:realisateurDateDeNaissance="movie.realisateur.dateDeNaissance" v-model:genre="movie.genre"
            v-model:poster="movie.poster" />

        <button v-on:click="editMovie(movie._id)">Enregistrer</button>
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
    },
}
</script>

<style scoped></style>
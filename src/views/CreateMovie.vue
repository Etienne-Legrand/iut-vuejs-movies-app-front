<template>
    <div>
        <FormMovie label="Ajouter un film" v-model:titre="movie.titre" v-model:anneeDeSortie="movie.anneeDeSortie"
            v-model:langue="movie.langue" v-model:realisateurNom="movie.realisateur.nom"
            v-model:realisateurNationalite="movie.realisateur.nationalite"
            v-model:realisateurDateDeNaissance="movie.realisateur.dateDeNaissance" v-model:genre="movie.genre"
            v-model:poster="movie.poster" />

        <button v-on:click="createMovie()">Ajouter</button>
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
        createMovie() {
            axios.post('http://185.212.226.104/api/movies', this.movie)
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
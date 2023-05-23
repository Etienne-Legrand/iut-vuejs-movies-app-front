<template>
    <div v-if="Object.keys(movie).length !== 0">
        <h1>{{ movie.titre }}</h1>
        <div>
            <strong>Année de sortie:</strong> {{ movie.anneeDeSortie }}
        </div>
        <div>
            <strong>Langue:</strong> {{ movie.langue }}
        </div>
        <div>
            <strong>Réalisateur:</strong> {{ movie.realisateur.nom }}
        </div>
        <div>
            <strong>Nationalité du réalisateur:</strong> {{ movie.realisateur.nationalite }}
        </div>
        <div>
            <strong>Date de naissance du réalisateur:</strong> {{ movie.realisateur.dateDeNaissance }}
        </div>
        <div>
            <strong>Genre:</strong> {{ movie.genre }}
        </div>
        <div>
            <img :style="{ 'max-width': '200px' }" :src="movie.poster" alt="Poster du film">
        </div>

        <div>
            <v-btn class="me-5 text-none text-subtitle-1 text-white" color="#5865f2" variant="elevated"
                @click="goToEditMovie(movie._id)">Editer</v-btn>
            <v-btn class="me-5 text-none text-subtitle-1 text-white" color="red" variant="elevated"
                @click="confirmDeleteMovie(movie._id)">Supprimer</v-btn>
        </div>
    </div>
    <div v-else>
        <p>Film introuvable</p>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
    name: 'App',
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
        goToEditMovie(id) {
            router.push({ name: 'edit', params: { id } });
        },
        deleteMovie(id) {
            axios.delete(`http://185.212.226.104/api/movies/${id}`)
                .then(response => {
                    console.log(response.data);
                    router.push({ name: 'home' });
                })
                .catch(error => {
                    console.error(error);
                });
        },
        confirmDeleteMovie(id) {
            const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce film ?");
            if (confirmDelete) this.deleteMovie(id);
        },
    },
}
</script>

<style scoped></style>
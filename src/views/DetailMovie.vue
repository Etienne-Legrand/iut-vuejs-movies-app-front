<template>
    <div v-if="Object.keys(movie).length !== 0">
        <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card ref="form">
                    <v-card-text>
                        <!-- <h3 class="text-h4 text-center mb-10">{{ movie.titre }}</h3> -->
                        <!-- <v-text-field label="Année de sortie" v-model="movie.anneeDeSortie"></v-text-field> -->

                        <!-- <h1>{{ movie.titre }}</h1>
                        <strong>Année de sortie:</strong> {{ movie.anneeDeSortie }}
                        <strong>Langue:</strong> {{ movie.langue }}
                        <strong>Réalisateur:</strong> {{ movie.realisateur.nom }}
                        <strong>Nationalité du réalisateur:</strong> {{ movie.realisateur.nationalite }}
                        <strong>Date de naissance du réalisateur:</strong> {{ movie.realisateur.dateDeNaissance }}
                        <strong>Genre:</strong> {{ movie.genre }}
                        <img :style="{ 'max-width': '200px' }" :src="movie.poster" alt="Poster du film"> -->

                        <h3 class="text-h4 text-center mb-10">Détail</h3>

                        <v-text-field label="Titre" v-model="movie.titre" readonly></v-text-field>
                        <v-text-field label="Année de sortie" v-model="movie.anneeDeSortie" readonly></v-text-field>
                        <v-text-field label="Langue" v-model="movie.langue" readonly></v-text-field>
                        <v-text-field label="Nom du réalisateur" v-model="movie.realisateur.nom" readonly></v-text-field>
                        <v-text-field label="Nationalité du réalisateur" v-model="movie.realisateur.nationalite"
                            readonly></v-text-field>
                        <v-text-field label="Date de naissance du réalisateur" v-model="movie.realisateur.dateDeNaissance"
                            readonly></v-text-field>
                        <v-text-field label="Genre" v-model="movie.genre" readonly></v-text-field>
                        <v-text-field label="URL du poster" v-model="movie.poster" readonly></v-text-field>
                    </v-card-text>

                    <v-divider class="mt-12"></v-divider>

                    <v-card-actions>
                        <v-btn text :to="{ name: 'home' }">
                            Retourner à l'accueil
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="me-5 text-none text-subtitle-1 text-white" color="#5865f2" variant="elevated"
                            @click="goToEditMovie(movie._id)">Editer</v-btn>
                        <v-btn class="me-5 text-none text-subtitle-1 text-white" color="red" variant="elevated"
                            @click="confirmDeleteMovie(movie._id)">Supprimer</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
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
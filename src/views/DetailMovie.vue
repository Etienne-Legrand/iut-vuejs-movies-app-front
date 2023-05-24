<template>
    <div v-if="Object.keys(movie).length !== 0">
        <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card ref="form">
                    <v-card-text>
                        <DetailMovie :movie="movie" />
                    </v-card-text>

                    <v-divider class="mt-12"></v-divider>

                    <v-card-actions>
                        <v-btn class="ms-5" :to="{ name: 'home' }" color="grey-lighten-2" variant="flat">
                            Retourner à l'accueil
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="me-5 text-none text-subtitle-1 text-white" color="#5865f2" variant="flat"
                            @click="goToEditMovie(movie._id)">Editer</v-btn>
                        <v-btn class="me-5 text-none text-subtitle-1 text-white" color="red" variant="flat"
                            @click="confirmDeleteMovie(movie._id)">Supprimer</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
    <div v-else>
        <h1 class="text-center mt-16">Film introuvable</h1>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
import DetailMovie from '@/components/DetailMovie.vue';

export default {
    name: 'App',
    components: {
        DetailMovie,
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
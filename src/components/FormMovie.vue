<template>
    <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
            <v-card ref="form">
                <v-card-text>
                    <h3 class="text-h4 text-center mb-10">{{ labelTitre }}</h3>

                    <v-text-field label="Titre" v-model="localMovie.titre"></v-text-field>
                    <v-text-field label="Année de sortie" v-model="localMovie.anneeDeSortie"></v-text-field>
                    <v-text-field label="Langue" v-model="localMovie.langue"></v-text-field>
                    <v-text-field label="Nom du réalisateur" v-model="localMovie.realisateur.nom"></v-text-field>
                    <v-text-field label="Nationalité du réalisateur"
                        v-model="localMovie.realisateur.nationalite"></v-text-field>
                    <v-text-field label="Date de naissance du réalisateur"
                        v-model="localMovie.realisateur.dateDeNaissance"></v-text-field>
                    <v-text-field label="Genre" v-model="localMovie.genre"></v-text-field>
                    <v-text-field label="URL du poster" v-model="localMovie.poster"></v-text-field>
                </v-card-text>

                <v-divider class="mt-12"></v-divider>

                <v-card-actions>
                    <v-btn text v-if="localMovie._id" :to="{ name: 'detail', params: { id: localMovie._id } }">
                        Annuler
                    </v-btn>
                    <v-btn text v-else :to="{ name: 'home' }">
                        Annuler
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="green" v-on:click="sendMovie">
                        Enregistrer
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
  
<script>
export default {
    name: 'FormMovie',
    props: {
        movie: {
            type: Object,
            required: true
        },
        labelTitre: {
            type: String,
            required: true
        }
    },
    data: () => ({
        localMovie: { titre: '', anneeDeSortie: '', langue: '', realisateur: { nom: '', nationalite: '', dateDeNaissance: '' }, genre: '', poster: '' },
    }),
    mounted() {
        if (Object.keys(this.movie).length !== 0) {
            this.localMovie = Object.assign({}, this.movie);
        }
    },
    methods: {
        sendMovie() {
            this.$emit('getMovie', this.localMovie);
        }
    }

}
</script>
  
<style scoped></style>
  
<template>
    <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
            <v-card ref="form">
                <v-card-text>
                    <h3 class="text-h4 text-center mb-10">{{ labelTitre }}</h3>
                    <div class="d-flex flex-column align-center mb-2">
                        <v-img :width="200" cover :src="localMovie.poster"></v-img>
                    </div>
                    <v-text-field label="Titre" v-model="localMovie.titre"></v-text-field>
                    <v-text-field label="Année de sortie" v-model="localMovie.anneeDeSortie"></v-text-field>
                    <v-text-field label="Langue" v-model="localMovie.langue"></v-text-field>
                    <v-text-field label="Nom du réalisateur" v-model="localMovie.realisateur.nom"></v-text-field>
                    <v-text-field label="Nationalité du réalisateur"
                        v-model="localMovie.realisateur.nationalite"></v-text-field>
                    <v-text-field label="Date de naissance du réalisateur"
                        v-model="localMovie.realisateur.dateDeNaissance"></v-text-field>
                    <v-text-field label="Genre" v-model="localMovie.genre"></v-text-field>
                    <v-text-field
                        label="URL du poster (Récupéré automatiquement si non complété en fonction du titre en anglais et de l'année de sortie)"
                        v-model="localMovie.poster"></v-text-field>

                    <div class="d-flex flex-column align-center">
                        <p>Note ({{ localMovie.rate }}/5)</p>
                        <v-rating v-model="localMovie.rate" color="grey" bg-grey active-color="yellow-darken-2"
                            half-increments hover></v-rating>
                    </div>
                </v-card-text>

                <v-divider class="mt-12"></v-divider>

                <v-card-actions>
                    <v-btn v-if="localMovie._id" :to="{ name: 'detail', params: { id: localMovie._id } }"
                        color="grey-lighten-2" variant="flat" class="ms-2">
                        Annuler
                    </v-btn>
                    <v-btn v-else :to="{ name: 'home' }" color="grey-lighten-2" variant="flat" class="ms-2">
                        Annuler
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="sendMovie" color="green" variant="flat" class="me-2">
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
        localMovie: { titre: '', anneeDeSortie: '', langue: '', realisateur: { nom: '', nationalite: '', dateDeNaissance: '' }, genre: '', poster: '', rate: null },
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
  
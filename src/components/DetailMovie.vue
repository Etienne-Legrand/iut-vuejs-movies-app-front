<template>
    <h3 class="text-h4 text-center mb-10">Détail</h3>
    <v-table>
        <tbody>
            <tr>
                <td class="text-key">Titre</td>
                <td>{{ movie.titre }}</td>
            </tr>
            <tr>
                <td class="text-key">Année de sortie</td>
                <td>{{ movie.anneeDeSortie }}</td>
            </tr>
            <tr>
                <td class="text-key">Langue</td>
                <td>{{ movie.langue }}</td>
            </tr>
            <tr>
                <td class="text-key">Nom du réalisateur</td>
                <td>{{ movie.realisateur.nom }}</td>
            </tr>
            <tr>
                <td class="text-key">Nationalité du réalisateur</td>
                <td>{{ movie.realisateur.nationalite }}</td>
            </tr>
            <tr>
                <td class="text-key">Date de naissance du réalisateur</td>
                <td>{{ movie.realisateur.dateDeNaissance }}</td>
            </tr>
            <tr>
                <td class="text-key">Genre</td>
                <td>{{ movie.genre }}</td>
            </tr>
            <tr>
                <td class="text-key">Poster</td>
                <v-img :width="150" cover :src="movie.poster"></v-img>
            </tr>
            <tr>
                <td class="text-key">Note ({{ rate }}/5)</td>
                <v-rating v-model="rate" readonly color="grey" bg-grey active-color="yellow-darken-2" half-increments
                    hover></v-rating>
            </tr>
        </tbody>
    </v-table>
</template>
  
<script>
export default {
    name: 'FormMovie',
    props: {
        movie: {
            type: Object,
            required: true
        },
    },
    data: () => ({
        rate: null,
    }),
    mounted() {
        if (Object.keys(this.movie).length !== 0) {
            this.rate = this.movie.rate;
        }
    },
}
</script>
  
<style scoped>
.text-key {
    font-size: medium;
    font-weight: bold;
}

.text-value {
    font-size: large;
    margin-bottom: 20px;
}
</style>
  
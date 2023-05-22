<template>
    <h3>{{ label }}</h3>

    <label for="titre">Titre :</label>
    <input type="text" id="titre" :value="titre" @input="$emit('update:titre', $event.target.value)"><br>

    <label for="annee">Année de sortie :</label>
    <input type="text" id="annee" :value="anneeDeSortie" @input="$emit('update:anneeDeSortie', $event.target.value)"><br>

    <label for="langue">Langue :</label>
    <input type="text" id="langue" :value="langue" @input="$emit('update:langue', $event.target.value)"><br>

    <label for="realisateur-nom">Nom du réalisateur :</label>
    <input type="text" id="realisateur-nom" :value="realisateurNom"
        @input="$emit('update:realisateurNom', $event.target.value)"><br>

    <label for="realisateur-nationalite">Nationalité du réalisateur :</label>
    <input type="text" id="realisateur-nationalite" :value="realisateurNationalite"
        @input="$emit('update:realisateurNationalite', $event.target.value)"><br>

    <label for="realisateur-date-naissance">Date de naissance du réalisateur :</label>
    <input type="text" id="realisateur-date-naissance" :value="realisateurDateDeNaissance"
        @input="$emit('update:realisateurDateDeNaissance', $event.target.value)"><br>

    <label for="genre">Genre :</label>
    <input type="text" id="genre" :value="genre" @input="$emit('update:genre', $event.target.value)"><br>

    <label for="poster">URL du poster :</label>
    <input type="text" id="poster" :value="poster" @input="$emit('update:poster', $event.target.value)"><br>
</template>
  
<script>
export default {
    name: 'FormMovie',
    props: {
        label: {
            type: String,
            default: 'Label'
        },
        titre: {
            type: String,
            default: ''
        },
        anneeDeSortie: {
            type: String,
            default: ''
        },
        langue: {
            type: String,
            default: ''
        },
        realisateurNom: {
            type: String,
            default: ''
        },
        realisateurNationalite: {
            type: String,
            default: ''
        },
        realisateurDateDeNaissance: {
            type: String,
            default: ''
        },
        genre: {
            type: String,
            default: ''
        },
        poster: {
            type: String,
            default: ''
        },

    },
}
</script>
  
<style scoped></style>
  
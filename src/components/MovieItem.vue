<template>
    {{ movie.titre }} {{ movie.anneeDeSortie }}
    <button @click="$emit('edit')">Editer</button>
    <button @click="$emit('delete')">Supprimer</button>
</template>
  
<script>
export default {
    name: 'MovieItem',
    props: {
        movie: {
            type: Object,
            required: true
        },
    },

}
</script>
  
<style scoped></style>
  
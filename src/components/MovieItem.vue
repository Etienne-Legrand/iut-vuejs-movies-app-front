<template>
    <div style="width: 200px; text-align: center;">
        <router-link :to="{ name: 'detail', params: { id: movie._id } }">
            <img style="width: 150px" :src="movie.poster" alt="Poster du film">
            <p>{{ movie.titre }}</p>
        </router-link>
        <!-- <button @click="$emit('edit')">Editer</button>
    <button @click="$emit('delete')">Supprimer</button> -->
    </div>
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
  
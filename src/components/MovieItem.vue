
<template>
    <v-hover>
        <template v-slot:default="{ isHovering, props }">
            <v-card width="auto">
                <router-link class="text-decoration-none" :to="{ name: 'detail', params: { id: movie._id } }">
                    <v-img :src="movie.poster" height="200px" cover></v-img>

                    <v-card-actions>
                        <v-card-title :class="isHovering ? 'text-primary' : 'text-black'" v-bind="props">
                            {{ movie.titre }}
                        </v-card-title>
                    </v-card-actions>
                </router-link>
            </v-card>
        </template>
    </v-hover>
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
  
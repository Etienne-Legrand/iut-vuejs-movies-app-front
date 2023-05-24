
<template>
    <router-link class="text-decoration-none text-black" :to="{ name: 'detail', params: { id: movie._id } }">
        <div class="card">
            <div class="card__product-img">
                <img class="card__img" alt="product-image" :src="movie.poster">
            </div>
            <div class="card__content">
                <p class="card__name"><span>{{ movie.titre }}</span></p>
            </div>
            <div class="card__footer">
                <p>Année : {{ movie.anneeDeSortie }}</p>
                <p>De : {{ movie.realisateur.nom }}</p>
            </div>
        </div>
    </router-link>
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
  
<style scoped lang="scss">
.card {
    background-color: #15263F;
    color: #8BACD9;
    border-radius: 8px;
    padding: 10px;
    width: 180px;
    font-size: 1rem;
    box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    text-align: center;

    .card__product-img {
        border-radius: 8px;
    }

    .card__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card__content {
        padding: 10px 0 10px 0;

        .card__name {
            color: white;
            font-size: 1rem;
            font-weight: bold;
        }
    }

    .card__footer {
        border-top: 1px solid #2E405A;
        padding-top: 5px;
        font-size: 0.8rem;
        color: white;
    }
}
</style>
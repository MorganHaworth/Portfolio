<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">404</h1>
                <h4 class="card-subtitle">The page you are looking for is not here</h4>
                <!-- <img :src="getImgUrl("Page-Not-Found.jpg")" class="card-img-bottom images" alt="Page Not Found"> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: none;
}
</style>

<script>
export default {
    methods: {
        getImgUrl: function(pic) {
            return require('../assets/'+pic).default
        }
    },
    name: 'pageNotFound',
    props: {
    }
}
</script>
<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">Morgan Haworth</h1>
                <img :src="getUrl('Morgan-TOPS.jpg')" style="width:40%; border-radius: 100%;" class="card-img-bottom" alt="Morgan selfie">
            </div>
        </div>
        <div class="card">
            Hello, welcome to my site XOXO.
        </div>
    </div>
</template>

<style scoped>
.card {
    border: none;
}

h1 {
    font-size: 3em;
    color: #EF6573;
    font-family: Raleway, Montserrat, sans-serif;
}
</style>

<script>
export default {
    methods: {
        getUrl: function(pic) {
            return require('../assets/'+pic).default
        }
    },
    name: 'home',
    props: {
    }
}
</script>
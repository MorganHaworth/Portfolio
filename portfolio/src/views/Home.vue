<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">Morgan Haworth</h1>
                <img :src="getUrl('Morgan-TOPS.jpg')" style="width:40%; border-radius: 100%;" class="card-img-bottom" alt="Morgan selfie">
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <a href="#" target="_blank">
                    <router-link to="/about" class="btn" exact href="#">View About Me</router-link>
                </a>
                <a href="#" target="_blank">
                    <router-link to="/resume" class="btn" exact href="#">View Resume</router-link>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn {
    color: white;
    background-color: rgb(72, 190, 181);
    border: none;
    font-family: Raleway;
    margin: 0 10px 10px 10px;
}

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
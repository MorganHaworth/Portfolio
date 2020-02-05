<template>
    <div class="sticky-top">
        <nav class="navbar navbar-expand-sm navbar-dark shadow-sm myNavBar">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/" style="color: rgba(255,255,255,.9)" class="nav-item nav-link class-active='active'" exact href="#">Home<span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" style="color: rgba(255,255,255,.9)" class="nav-item nav-link" exact href="#">About</router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link to="/resume" style="color: rgba(255,255,255,.9)" class="nav-item nav-link" exact href="#">Resume</router-link>
                        </li> -->
                        <!--<li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>-->
                        <!--<li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>-->
                    </ul>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto navBgColor"> <!--  background color of icons -->
                        <li class="nav-item brandIcon">
                            <a class="nav-link" href="mailto:morgan123haworth@gmail.com">
                                <font-awesome-icon size="lg" style="color: rgba(255,255,255,.9)" icon="envelope"/>
                            </a>
                        </li>
                        <li class="nav-item brandIcon">
                            <a class="nav-link" href="https://github.com/MorganHaworth">
                                <font-awesome-icon size="lg" style="color: rgba(255,255,255,.9)" :icon="['fab', 'github']"/>
                            </a>
                        </li>
                        <li class="nav-item brandIcon">
                            <a class="nav-link" href="https://www.linkedin.com/in/morganhaworth/">
                                <font-awesome-icon style="color: rgba(255,255,255,.9)" size="lg" :icon="['fab', 'linkedin']"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
nav li:hover {
    background-color: #EF6573;
}

.brandIcon {
    color: white;
    padding-left: 5px;
}

.navbar {
    padding-top: 0;
    padding-bottom: 0;
}

nav li {
    padding: 2px;
    /*padding-top: 2px;
    padding-bottom: 2px;*/
}

.navBgColor {
    background-color: rgb(72, 190, 181);/*#B1EDE8;*/
}

.myNavBar {
    background-color: #352D39;
}
</style>

<script>
export default {
    name: 'Menu',
    props: {
    }
}
</script>

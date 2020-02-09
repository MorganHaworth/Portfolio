import Vue from 'vue';
import Router from 'vue-router';
import home from '../views/Home.vue';
import about from '../views/About.vue';
import pageNotFound from '../views/PageNotFound.vue'
import resume from '../views/Resume.vue';

Vue.use(Router);
//const Router = new
export default new Router({  
    mode: 'history',
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        }, 
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/resume',
            name: 'resume',
            component: resume
        },
        {
            path: '*',
            name: '404',
            component: pageNotFound
        }
    ]
})

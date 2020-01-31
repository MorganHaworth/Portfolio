import Vue from 'vue';
import Router from 'vue-router';
import home from '../views/Home.vue';
import about from '../views/About.vue';
import resume from '../views/Resume.vue';

Vue.use(Router);

export default new Router({  
    mode: 'history',
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
        }
    ]
})

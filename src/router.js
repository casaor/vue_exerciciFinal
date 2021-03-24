import VueRouter from 'vue-router'
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import Pictures from './views/Pictures.vue';

const paths = [
    { 
        path: '/home', 
        component: Home 
    },
    { 
        path: '/users', 
        component: Users 
    },
    { 
        path: '/pictures', 
        component: Pictures 
    }
];

const router = new VueRouter (
{
    routes: paths,
    mode: 'history'
});

export default router;
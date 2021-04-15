import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import Pictures from './views/Pictures.vue';
import UserInfo from './components/UserInfo.vue';
import PhotoInfo from './components/PhotoInfo.vue';


const paths = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/users', 
        component: Users 
    },
    { 
        path: '/pictures', 
        component: Pictures 
    },
    { 
        path: '/users/:Pid', 
        name: 'users1',
        component: UserInfo,
    }, 
    { 
        path: '/pictures/:Qid', 
        name: 'photo',
        component: PhotoInfo,
    }  
];

const router = new VueRouter (
{
    routes: paths,
    mode: 'history'
});

export default router;
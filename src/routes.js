import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AddDetails from './components/AddDetails.vue'
import HomeForm from './components/HomeForm.vue'
import EditForm from './components/EditForm.vue'
import login from './components/login.vue'

const routes= [

    {
        path: '',
        name: 'login',
        component: login
    },
    {
        path: '/homeform',
        name: 'HomeForm',
        component: HomeForm,
        
    },
    {
        path: '/editform/:id?',
        name: 'EditForm',
        component: EditForm
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/adddetails',
        name: 'AddDetails',
        component: AddDetails
    },
];
const router = createRouter({
     history: createWebHistory(),
     routes
})

export default router
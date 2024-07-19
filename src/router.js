import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppProjects from "./components/AppProjects.vue";
import AppAbout from "./components/AppAbout.vue";
import AppContacts from "./components/AppContacts.vue";

const router = createRouter ({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },

        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },

        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },

        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },

    ]
});

export { router };
import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Detail from "../views/Detail.vue";
import Chapter from "../views/Chapter.vue";
import Genre from "../views/Genre.vue";
import SearchResults from "../views/SearchResults.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/genre",
        name: "Genre",
        component: Genre,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/detail/:endpoint",
        name: "Detail",
        component: Detail,
        props: true,
    },
    {
        path: "/chapter/:endpoint",
        name: "Chapter",
        component: Chapter,
        props: true,
    },
    {
        path: "/search/:query",
        name: "SearchResults",
        component: SearchResults,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
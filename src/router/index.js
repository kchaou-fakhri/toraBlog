import { createRouter, createWebHistory } from 'vue-router'
import more from '../components/Pages/MoreInfo.vue'
import home from '../components/Pages/Home.vue'
import bytype from '../components/Pages/Newsbytype.vue'

const routes = [
    {
        path : '/',
        component : home
        },
    {
        path : '/more',
        component : more
    },
    {
        path : '/bytype',
        component : bytype
    },
    

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router
const { createRouter, createWebHistory } = require("vue-router")
import Index from '../components/products/Index.vue'
import NotFound from '../components/NotFound.vue'
const routes=[
    {
        path:"/index",
        component:Index,
    },
    {
        path:"/:pathMatch(.*)*",
        component:NotFound,  
    }

]
const router=createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
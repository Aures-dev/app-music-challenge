import { createWebHistory, createRouter } from "vue-router";
import { recupUser } from "./utils";

import Login  from "./views/LoginView.vue";
import Home  from "./components/AppMusicMain.vue";
import ErrorView  from "./views/ErrorView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:Login,
             name:'Login'
            },
        {
            path:'/app-music-main',
            component:Home,
            meta:{require:true}
            },
        {
            path: '/:pathMatch(.*)*',
            component: ErrorView,
            }
    ]
})

// 
const user = () => recupUser()? recupUser():{isAuthenticated:false}
router.beforeEach(async (to, from, next) => {
    if (to.meta.require && to.name !== 'Login' && !user().isAuthenticated) {
        console.log("user", user);
        
        next({ name: 'Login' })
    }
    else {
        console.log(user().isAuthenticated);   
        next()
    }
})



export default router
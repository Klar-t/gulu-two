import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import klart from './components/klart.vue'
import klart2 from './components/klart2.vue'

const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[
        {path:'/xxx',component:klart2},
        {path:'/',component:klart}
    ]
})

const app=createApp(App)
app.use(router)
app.mount('#app')



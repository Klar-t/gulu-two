import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from "./components/SwitchDemo.vue"
import DocDemo from "./components/DocDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DiaLogDemo from "./components/DiaLogDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"

const history=createWebHashHistory()
export const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'/',component:DocDemo},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DiaLogDemo},
            {path:'tabs',component:TabsDemo},
        ]}
    ]
});
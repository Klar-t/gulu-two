import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from "./components/SwitchDemo.vue"
import DocDemo from "./components/DocDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DiaLogDemo from "./components/DiaLogDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"
import Intro from "./views/Intro.vue"
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'

const history=createWebHashHistory()
const md=filename=>h(Markdown,{path:`../markdown/${filename}.md`,key:filename})
export const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',component:DocDemo},
            {path:'Intro',component:md('intro')},
            {path:'get-started',component:md('get-started')},
            {path:'install',component:md('install')},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DiaLogDemo},
            {path:'tabs',component:TabsDemo},
        ]}
    ]
})
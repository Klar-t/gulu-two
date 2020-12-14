<template>
    <demo :component="Button1Demo"/>
    <demo :component="Button2Demo"/>
    <demo :component="Button3Demo"/>
    <demo :component="Button4Demo"/>
    <demo :component="Button5Demo"/>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Button1Demo from '../components/Button1.demo.vue'
import Button2Demo from '../components/Button2.demo.vue'
import Button3Demo from '../components/Button3.demo.vue'
import Button4Demo from '../components/Button4.demo.vue'
import Button5Demo from '../components/Button5.demo.vue'
import  'prismjs'
import 'prismjs/themes/prism.css'
import Demo from './Demo.vue'


const Prism =(window as any).Prism
console.log(Prism)
export default {
    components: {
        Demo
    },
    setup() {
        
        const y = ref(false)
        return {
            y,Button1Demo,Prism,Button2Demo,Button3Demo,Button4Demo,Button5Demo
        }
    }
}
</script>
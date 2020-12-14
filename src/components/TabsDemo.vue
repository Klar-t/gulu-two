<template>
    <demo :component="TabDemo"/>
</template>

<script lang="ts">
import TabDemo from '../components/Tabs1.demo.vue'
import { ref } from 'vue'
import  'prismjs'
import 'prismjs/themes/prism.css'
import Demo from './Demo.vue'


const Prism =(window as any).Prism
console.log(Prism)
export default {
    components:{
        Demo
    },
    setup() {
        return {
            Prism,TabDemo
        }
    }
}
</script>

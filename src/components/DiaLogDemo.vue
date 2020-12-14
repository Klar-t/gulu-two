<template>
<div>
    <demo :component="Dialog1Demo"/>
    <demo :component="Dialog2Demo"/>
</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog1Demo from '../components/Dialog1.demo.vue'
import Dialog2Demo from '../components/Dialog2.demo.vue'
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
        return {
            Prism,Dialog1Demo,Dialog2Demo
        }
    }
}
</script>

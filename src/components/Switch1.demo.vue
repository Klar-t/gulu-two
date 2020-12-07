<demo>
常规用法1
</demo>

<template>
    <Switch v-model:value="bool" />
</template>

<script>
import { ref } from 'vue'
import Switch from '../Lib/Switch.vue'
export default {
    components:{
        Switch,
    },
    setup(){
        const bool=ref(false)
        return{
            bool
        }
    }
}
</script>  

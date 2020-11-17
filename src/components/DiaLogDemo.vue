<template>
<div>
    DiaLogDemo组件
</div>
<Button @click="toggle">toggle</Button>
<Dialog v-model:visible="x" :closeonClickOverlay="false"
:ok="f1" :cancel="f2"
/>
<div>

</div>
</template>

<script lang="ts">
import Dialog from '../Lib/Dialog.vue'
import Button from '../Lib/Button.vue'
import { ref } from 'vue'
export default {
    components: {
        Dialog,
        Button
    },
    setup(){
        const x=ref(false)
        const toggle=()=>{
            x.value=!x.value
        }
        const f1=()=>{
            return false
        }
        const f2=()=>{

        }
        return {
            x,toggle,f1,f2
        }
    }
}
</script>

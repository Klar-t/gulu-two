<template>
<div>
    DiaLogDemo组件

<Button @click="toggle">toggle</Button>
<Dialog v-model:visible="x" :closeonClickOverlay="false"
:ok="f1" :cancel="f2">
<template v-slot:content>
    <div>好</div>
    <div>你好</div>
</template>
<template v-slot:title>
    <strong>提示</strong>
</template>
</Dialog>
<h2>示例2</h2>
<Button @click="showDialog">show </Button>
</div>
</template>

<script lang="ts">
import Dialog from '../Lib/Dialog.vue'
import Button from '../Lib/Button.vue'
import { ref } from 'vue'
import { openDialog} from '../Lib/openDialog'
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
        const showDialog=()=>{
            openDialog({
                title:'标题',
                content:'你好',
                ok(){
                    console.log("ok");
                },
                cancel(){
                    console.log("cancel");
                }
                })
        }
        return {
            x,toggle,f1,f2,showDialog
        }
    }
}
</script>

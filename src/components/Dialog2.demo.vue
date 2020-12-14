<demo>
    Dialog
</demo>
<template>
    <Button @click="showDialog">show </Button>
</template>
<script lang="ts">
import { ref } from 'vue'
import { openDialog} from '../Lib/openDialog'
import Button from '../Lib/Button.vue'
export default {
    components:{
        Button,
    },
    setup(){
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
            showDialog
        }
    }
}
</script>
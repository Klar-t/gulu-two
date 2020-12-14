<demo>
Button
</demo>

<template>
    <Button @click="onClick">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
</template>

<script>
import { ref } from 'vue'
import Button from '../Lib/Button.vue'
export default {
    components:{
        Button,
    },
    setup() {
        const onClick = () => {
            alert('你好')
        }
        return {
            onClick
        }
    }
}
</script>  

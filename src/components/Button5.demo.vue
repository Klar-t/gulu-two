<demo>
Button
</demo>

<template>
    <h1>示例5</h1>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
    </div>
</template>

<script>
import { ref } from 'vue'
import Button from '../Lib/Button.vue'
export default {
    components:{
        Button,
    }
}
</script>  

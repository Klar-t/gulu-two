<demo>
Button
</demo>

<template>
    <h1>示例4</h1>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用链接按钮</Button>
        <Button theme="text" disabled>禁用按钮</Button>
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

<demo>
Button
</demo>

<template>
    <h1>示例3</h1>
    <div>
        <dir>
            <Button level="main">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger">危险按钮</Button>
        </dir>
        <dir>
            <Button theme="link" level="main">主要链接按钮</Button>
            <Button theme="link">普通链接按钮</Button>
            <Button theme="link" level="danger">危险链接按钮</Button>
        </dir>
        <dir>
            <Button theme="text" level="main">主要文字按钮</Button>
            <Button theme="text">普通文字按钮</Button>
            <Button theme="text" level="danger">危险文字按钮</Button>
        </dir>
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

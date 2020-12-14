<demo>
Button
</demo>

<template>
    <h1>示例2</h1>
    <div>
        <div>
            <Button size="big">大大大</Button>
            <Button>普普通</Button>
            <Button size="small">小小小</Button>
        </div>
        <div>
            <Button theme="link" size="big">大大大</Button>
            <Button theme="link">普普通</Button>
            <Button size="small" theme="link">小小小</Button>
        </div>
        <div>
            <Button size="big" theme="text">大大大</Button>
            <Button theme="text">普普通</Button>
            <Button size="small" theme="text">小小小</Button>
        </div>
    </div>
</template>

<script lang="ts" >
import { ref } from 'vue'
import Button from '../Lib/Button.vue'
export default {
    components:{
        Button,
    }
}
</script>  

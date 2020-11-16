<template>
<div>button 实例
</div>
<div>
    <Button>你好</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
</div>
</template>

<script lang="ts">
import Button from '../Lib/Button.vue'
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('hi')
        }
        return {
            onClick
        }
    }
}
</script>

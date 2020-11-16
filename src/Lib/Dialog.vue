<template>
<div>Dialog 示例</div>
<h1>示例一</h1>
<div class="dialog-wrapper">
    <header>标题</header>
    <main>
        <p>第一行字</p>
        <p>第二行字</p>
    </main>
    <footer>
        <Button>OK</Button>
        <Button>Cancel</Button>
    </footer>
</div>
</template>

<script>
import Button from '../Lib/Button.vue'
export default {
    components: {
        Button
    }
}
</script>

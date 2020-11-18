<template>
    <div>
        Tabs组件
    </div>
</template>
<script lang="ts">
export default {
    setup(props,context){
        console.log({...context.slots.default()[0]})
        console.log({...context.slots.default()[1]})
    }
}
</script>

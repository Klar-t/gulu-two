<template>
<div>
    Tabs示例
</div>
<h1>示例1</h1>
<Tabs selected="导航1">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../Lib/Tabs.vue'
import Tab from '../Lib/Tab.vue'
export default {
    components:{
        Tabs,
        Tab
    }
}
</script>

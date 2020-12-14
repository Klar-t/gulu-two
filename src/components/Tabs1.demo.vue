<demo>
Button
</demo>

<template>
    <Tabs v-model:selected="x">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航asdf2">内sfdasf容2</Tab>
    </Tabs>
</template>

<script>
import { ref } from 'vue'
import Button from '../Lib/Button.vue'
import Tabs from '../Lib/Tabs.vue'
import Tab from '../Lib/Tab.vue'
export default {
    components:{
        Tabs,
        Tab,
        Button,
    },
    setup(){
        const x=ref('导航1')
        return {
            x
        }
    }
}
</script>  

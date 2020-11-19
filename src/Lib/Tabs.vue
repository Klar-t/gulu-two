<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <div class="gulu-tabs-nav-item"
            :class="{selected:t===selected}"
            v-for="(t,index) in titles" :key="index">{{t}}</div>
        </div>
        <div class="gulul-tabs-content">
            <component v-for="(c,index) in defaults" :is="c" :key="index"/>
        </div>
        
    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
export default {
    props:{
        selected:{
            type:String
        }
    },
    setup(props,context){
        const defaults=context.slots.default()
        defaults.forEach((tag)=>{
            if(tag.type!=Tab){
                throw new Error('Tabs 子标签必须是Tab')
            }
        })
        const titles=defaults.map((tag)=>{
            return tag.props.title
        })
        return {
            defaults,titles
        }
    }
    
}
</script>

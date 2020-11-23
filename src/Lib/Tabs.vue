<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <div class="gulu-tabs-nav-item"
            @click="select(t)"
            :class="{selected: t===selected}" 
            v-for="(t,index) in titles" 
            :ref="el=>{if(el) navItems[index]=el}"
            :key="index">{{t}}</div>
            <div class="gulu-tabs-nav-indicatior" ref="indicator"></div>
        </div>
        <div class="gulul-tabs-content">
            <component class="gulu-tabs-content-item"
            :class="{selected:c.props.title===selected}"
             v-for="c in defaults" :is="c"/>
        </div>
        
    </div>
</template>
<script lang="ts">
import { computed, onMounted, ref } from 'vue'
import Tab from './Tab.vue'
export default {
    props:{
        selected:{
            type:String
        }
    },
    setup(props,context){
        const navItems=ref<HTMLDivElement[]>([])
        const indicator=ref<HTMLDivElement[]>();
        onMounted(()=>{
            console.log("navitem:")
            console.log({...navItems.value});
            const divs=navItems.value;
            const result=divs.filter(div=>div.classList.contains('selected'))[0];
            console.log(result);
            const {width}=result.getBoundingClientRect();
            indicator.value.style.width

        })
        const defaults=context.slots.default()
        console.log(...defaults)
        defaults.forEach((tag)=>{
            if(tag.type!=Tab){ 
                throw new Error('Tabs 子标签必须是Tab')
            }
        })
        const titles=defaults.map((tag)=>{
            return tag.props.title
        })
        const current=computed(()=>{
            console.log() 
            return defaults.filter((tag)=>{
                return tag.props.title===props.selected
            })[0]
        }) 
        
        const select = (title: string) => {
            context.emit('update:selected', title)
            console.log("d")
        }
        return {
            defaults,titles,select,current,navItems,indicator
        }
    }
    
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicatior{
        position: absolute;
        height: 3px;
        background:$blue;
        left: 0;
        bottom: -1px;
        width: 100px;

    }
  }
  &-content {
    padding: 8px 0;
    &-item{
        display: none;
        &.selected{
            display: block;
        }
        
    }
  }
  
}
</style>
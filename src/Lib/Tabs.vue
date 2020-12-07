<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav" ref="container">
            <div class="gulu-tabs-nav-item"
            @click="select(t)"
            :class="{selected: t===selected}" 
            v-for="(t,index) in titles" 
            :ref="el=>{if(t===selected) selecteditem=el}"
            :key="index">{{t}}</div>
            <div class="gulu-tabs-nav-indicatior" ref="indicator"></div>
        </div>
        <div class="gulul-tabs-content">
            <component :is="current" :key="current.props.title"/>
            <!-- <component class="gulu-tabs-content-item"
            :class="{selected:c.props.title===selected}"
             v-for="c in defaults" :is="c"/>-->
        </div>
        
    </div>
</template>
<script lang="ts">
import { computed, onMounted, onUpdated, ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
    props:{
        selected:{
            type:String
        }
    },
    setup(props,context){
        const selecteditem=ref<HTMLDivElement>(null)
        const indicator=ref<HTMLDivElement>(null);
        const container=ref<HTMLDivElement>(null);
        onMounted(()=>{
            watchEffect(()=>{
                const {width}=selecteditem.value.getBoundingClientRect();
                indicator.value.style.width=width+'px';
                console.log("width:"+indicator.value.style.width)
                const{left:left1}=container.value.getBoundingClientRect();
                const {left:left2}=selecteditem.value.getBoundingClientRect();
                console.log(selecteditem.value.getBoundingClientRect());
                const left=left2-left1;
                indicator.value.style.left=left+'px';
                console.log('width1:'+left);
            })

        });
        const defaults=context.slots.default()
        console.log(...defaults)
        defaults.forEach((tag)=>{
            if(tag.type!=Tab){ 
                throw new Error('Tabs 子标签必须是Tab')
            }
        })
        const current=computed(()=>{
            return defaults.find(tag=>tag.props.title===props.selected)
        })
        const titles=defaults.map((tag)=>{
            return tag.props.title
        })

        const select = (title: string) => {
            context.emit('update:selected', title)
            console.log("d")
        }
        return {
            defaults,titles,select,selecteditem,indicator,container,current
        }
    }
    
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #007974;
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
        transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    
  }
  
}
</style>
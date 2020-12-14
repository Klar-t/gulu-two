<template>
<div>
    <demo :component="Switch1Demo"/>
    <h2>dasfk </h2>
    <h1>Switch 组件</h1>
    <div class="demo">
        <h2>常规用法</h2>
        <div class="demo-component">
            <component :is="Switch1Demo"/>
        </div>
        <div class="demo-actions">
            <Button>查看代码</Button>
        </div>
        <div class="demo-code">
            <pre class="language-html" v-html="Prism.highlight(Switch1Demo.__sourceCode,Prism.languages.html,'html')"></pre>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Switch from '../Lib/Switch.vue'
import Switch1Demo from '../components/Switch1.demo.vue'
import Button from '../Lib/Button.vue'
import  'prismjs'
import 'prismjs/themes/prism.css'
import Demo from './Demo.vue'

const Prism =(window as any).Prism
console.log(Prism)
export default {
    components: {
        Switch,
        Button,
        Demo
    },
    setup() {
        
        const y = ref(false)
        return {
            y,Switch1Demo,Prism
        }
    }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>

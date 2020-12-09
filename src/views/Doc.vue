<template>
<div id="cover" v-if="maskVisible" @click="toggleVisible"></div>
<div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
        <aside v-if="menuVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/Intro">介绍</router-link>
                </li>
                <li>
                    <router-link to="/doc/install">安装</router-link>
                </li>
                <li>
                    <router-link to="/doc/get-started">开始使用</router-link>
                </li>
                <li>
                    <router-link to="/doc/switch">Switch 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs 组件</router-link>
                </li>
            </ol>
        </aside>
        <main>
            <router-view />
        </main>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {
    inject,
    Ref
} from 'vue'
export default {
    components: {
        Topnav
    },
    setup() {
        const menuVisible = inject < Ref < boolean >> ('menuVisible'); //get
        const maskVisible = inject < Ref < boolean >> ('maskVisible');
        console.log('Doc  获取的：' + menuVisible.value);
        const toggleVisible=()=>{
            console.log("这里取反")
            maskVisible.value=!maskVisible.value;
        }
        return {
            menuVisible,toggleVisible,maskVisible
        }
    }
}
</script>

<style lang="scss" scoped>
$aside-index:10;
#cover{ 
    position:absolute;left:0px;top:0px;
    background:rgba(0, 0, 0, 0.4);
    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    height:100%;
    filter:alpha(opacity=60);  /*设置透明度为60%*/
    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
    z-Index:9;  
}
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
        flex-shrink: 0;
    }

    >.content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;

        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;

    >aside {
        flex-shrink: 0;
    }

    >main {
        flex-grow: 1;
        padding: 16px;
        background: white;
    }
}

aside {
    background: lightblue;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: $aside-index;
    >h2 {
        margin-bottom: 4px;
        padding: 0 16px;
    }

    >ol {
        >li {
            >a{
                display: block;
                padding: 4px 16px;
                text-decoration: none;
            }
            .router-link-active{
                background: white;
            }
        }
    }
}

main {
    overflow: auto;
}
</style>

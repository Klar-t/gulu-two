<template>
<div class="topnav">
    <router-link to="/" class="logo">
        <svg class="icon">
            <use xlink:href="#icon-dc"></use>
        </svg>
    </router-link>
    <div class="menu">
        <li>
            <router-link to="/doc">文档</router-link>
        </li>
    </div>
    <svg v-if="toggleMenuButtonVisible"
    class="toggleAside" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
    </svg>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    props:{
        toggleMenuButtonVisible:{
            type: Boolean,
            default: false
        }
    },
    setup() {
        const menuVisible = inject < Ref < boolean >> ('menuVisible'); //get
        console.log('topnva 获取的：' + menuVisible.value);
        const toggleMenu = () => {
            console.log('dadf' + !menuVisible.value);
            menuVisible.value = !menuVisible.value
        };
        return {
            toggleMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.topnav {
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 20;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;
        >.icon{
            width: 32px;
            height: 32px;
        }
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {

        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }

    @media (max-width:500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>

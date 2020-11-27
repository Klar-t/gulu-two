<template>
<div>
    <div class="topanvAndBanner">
        <Topnav />
        <div class="banner">
            <h1>轱辘UI</h1>
            <h2>一个厉害的UI框架</h2>
            <p class="actions">
                <a>Github</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <svg class="icon">
            <use xlink:href="#icon-TS"></use>
        </svg>
        <svg class="icon">
            <use xlink:href="#icon-light"></use>
        </svg>
        <svg class="icon">
            <use xlink:href="#icon-vue"></use>
        </svg>
    </div>
    

</div>

</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>

<style lang="scss" scoped>
$green:#02bcb0;
$border-radius: 10px;
$color: #007974;
.topanvAndBanner{
    background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(88,217,227,1) 100%);
    clip-path:ellipse(80% 60% at 50% 40%);
}
.features{
    >svg{
        width: 64px;
        height: 64px;
    }
}
.banner {
    padding: 100px 0;
    color: $color;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background:$green;
            display: inline-block;
            padding: 8px 24px;
            border-radius: $border-radius;
            &:hover{
                text-decoration: none;
            }
        }
    }
}
</style>

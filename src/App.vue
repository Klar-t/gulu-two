<template>
<router-view />
</template>

<script lang="ts">
import {
    ref,
    provide
} from 'vue'
import {
    router
} from './router';
export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth;
        console.log(width);

        const menuVisible = ref(width <= 500 ? false : true);
        const maskVisible = ref(width >= 500 ? false : true);
        console.log("menuVisible:"+menuVisible.value);
        provide('menuVisible', menuVisible) //set
        provide('maskVisible', maskVisible)
        router.afterEach(() => {
            if (width <= 500)
            {
                 menuVisible.value = false;
                 maskVisible.value = false;
            }
               
        })
    }
}
</script>

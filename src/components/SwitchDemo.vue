<template>
<div>
    <Switch v-model:value="y" />
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Switch from '../Lib/Switch.vue'
export default {
    components: {
        Switch
    },
    setup() {
        const y = ref(false)
        return {
            y
        }
    }
}
</script>

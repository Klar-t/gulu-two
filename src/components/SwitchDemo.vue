<template>
<div>
    <Switch :value="y" @input="y = $event" />
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

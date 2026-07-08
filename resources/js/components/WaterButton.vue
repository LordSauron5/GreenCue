<script setup lang="ts">
import { Droplet } from '@lucide/vue';

defineEmits<{ water: [] }>();
</script>

<template>
    <button
        type="button"
        class="flex size-[46px] flex-none cursor-pointer items-center justify-center rounded-2xl bg-linear-to-br from-sky to-water-deep text-white shadow-[0_8px_16px_-8px_rgba(63,143,164,0.9)] transition-transform active:scale-90"
        @click="$emit('water')"
    >
        <Droplet class="size-5.5" fill="currentColor" />
    </button>
</template>

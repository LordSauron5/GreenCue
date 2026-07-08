<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
    <div class="mb-3 flex items-baseline justify-between px-0.5">
        <span class="font-display text-lg font-bold text-ink">{{ title }}</span>
        <slot />
    </div>
</template>

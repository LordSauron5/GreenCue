<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
    icon: Component;
    title: string;
    description: string;
}>();
</script>

<template>
    <div
        class="mt-5 flex items-center gap-3.5 rounded-[20px] border border-dashed border-leaf/35 bg-leaf-mist p-4"
    >
        <div
            class="flex size-11 flex-none items-center justify-center rounded-2xl bg-leaf-soft text-leaf-deep"
        >
            <component :is="icon" class="size-5.5" />
        </div>
        <div class="flex-1">
            <div class="flex items-center gap-1.5">
                <span class="text-sm font-bold text-leaf-deep">{{
                    title
                }}</span>
                <span
                    class="rounded-full bg-leaf-soft px-1.75 py-0.5 text-[9px] font-bold tracking-wide text-leaf"
                >
                    SOON
                </span>
            </div>
            <div class="mt-0.5 text-xs leading-snug text-ink-muted">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { Camera } from '@lucide/vue';
import { computed } from 'vue';
import type { Component } from 'vue';

export type BottomNavItem = {
    key: string;
    label: string;
    icon: Component;
    href?: string;
};

const props = defineProps<{
    items: BottomNavItem[];
    active: string;
    identifyHref?: string;
}>();

const half = computed(() => Math.ceil(props.items.length / 2));
const leftItems = computed(() => props.items.slice(0, half.value));
const rightItems = computed(() => props.items.slice(half.value));
</script>

<template>
    <div
        class="flex items-start justify-around border-t border-ink/7 bg-app-bg/92 pt-3 backdrop-blur-lg"
        style="padding-bottom: max(12px, var(--inset-bottom, 0px))"
    >
        <template v-for="item in leftItems" :key="item.key">
            <Link
                v-if="item.href"
                :href="item.href"
                class="flex w-13 flex-col items-center gap-0.75"
                :class="item.key === active ? 'text-leaf' : 'text-ink-faint'"
            >
                <component :is="item.icon" class="size-6" :stroke-width="1.9" />
                <span class="text-[10px] font-semibold">{{ item.label }}</span>
            </Link>
            <button
                v-else
                type="button"
                disabled
                class="flex w-13 flex-col items-center gap-0.75 text-ink-faint/50"
            >
                <component :is="item.icon" class="size-6" :stroke-width="1.9" />
                <span class="text-[10px] font-semibold">{{ item.label }}</span>
            </button>
        </template>

        <div class="-mt-1.5 flex w-14 justify-center">
            <Link
                v-if="identifyHref"
                :href="identifyHref"
                class="flex size-14 items-center justify-center rounded-full bg-linear-to-br from-leaf to-leaf-deep text-white shadow-[0_12px_22px_-8px_rgba(47,96,66,0.9)] transition-transform active:scale-90"
            >
                <Camera class="size-6.5" />
            </Link>
            <button
                v-else
                type="button"
                disabled
                class="flex size-14 items-center justify-center rounded-full bg-ink-faint/40 text-white"
            >
                <Camera class="size-6.5" />
            </button>
        </div>

        <template v-for="item in rightItems" :key="item.key">
            <Link
                v-if="item.href"
                :href="item.href"
                class="relative flex w-13 flex-col items-center gap-0.75"
                :class="item.key === active ? 'text-leaf' : 'text-ink-faint'"
            >
                <component :is="item.icon" class="size-6" :stroke-width="1.9" />
                <span class="text-[10px] font-semibold">{{ item.label }}</span>
            </Link>
            <button
                v-else
                type="button"
                disabled
                class="flex w-13 flex-col items-center gap-0.75 text-ink-faint/50"
            >
                <component :is="item.icon" class="size-6" :stroke-width="1.9" />
                <span class="text-[10px] font-semibold">{{ item.label }}</span>
            </button>
        </template>
    </div>
</template>

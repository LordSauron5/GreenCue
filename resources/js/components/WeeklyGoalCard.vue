<script setup lang="ts">
import { computed } from 'vue';

type Props = {
    done: number;
    target: number;
    label: string;
};

const props = defineProps<Props>();

const percent = computed(() => Math.round((props.done / props.target) * 100));
</script>

<template>
    <div
        class="relative overflow-hidden rounded-[22px] bg-linear-to-br from-leaf to-leaf-deep p-4.5 text-leaf-soft shadow-[0_14px_26px_-14px_rgba(47,96,66,0.7)]"
    >
        <div class="absolute -top-3.5 -right-3.5 text-8xl opacity-15">🌟</div>
        <div class="flex items-center justify-between">
            <span class="text-[13px] font-semibold tracking-tight">
                Weekly care goal
            </span>
            <span
                class="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold"
            >
                {{ done }}/{{ target }}
            </span>
        </div>
        <div class="my-2 font-display text-[15px] leading-tight font-bold">
            {{ label }}
        </div>
        <div class="h-2.5 overflow-hidden rounded-full bg-white/20">
            <div
                class="h-full rounded-full bg-linear-to-r from-[#ffe6a3] to-[#f6c667] transition-[width] duration-500 ease-out"
                :style="{ width: `${percent}%` }"
            />
        </div>
    </div>
</template>

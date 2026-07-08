<script setup lang="ts">
import type { CareStatus } from '@/types/plant';

defineProps<{ status: CareStatus }>();
</script>

<template>
    <span
        class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold"
        :class="[status.colorClass, status.bgClass]"
    >
        {{ status.label }}
    </span>
</template>

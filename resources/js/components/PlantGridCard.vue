<script setup lang="ts">
import { computed } from 'vue';
import PlantThumbnail from '@/components/PlantThumbnail.vue';
import { getCareStatus, getHealthColorClass } from '@/composables/usePlantCare';
import type { PlantSummary } from '@/types/plant';

const props = defineProps<{ plant: PlantSummary }>();

const status = computed(() => getCareStatus(props.plant.daysUntilWater));
const healthColorClass = computed(() =>
    getHealthColorClass(props.plant.healthScore),
);
</script>

<template>
    <div
        class="overflow-hidden rounded-[20px] border border-ink/6 bg-surface shadow-[0_5px_16px_-12px_rgba(37,48,35,0.5)]"
    >
        <div class="h-26">
            <PlantThumbnail :tint="plant.tint" :file-label="`${plant.id}.jpg`">
                <span
                    class="absolute top-2 right-2 size-2.75 rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.55)]"
                    :class="status.dotClass"
                />
            </PlantThumbnail>
        </div>
        <div class="p-3 pt-2.5">
            <div class="font-display text-sm font-bold text-ink">
                {{ plant.nickname }}
            </div>
            <div class="truncate text-[11px] text-ink-faint">
                {{ plant.room }}
            </div>
            <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-alt">
                <div
                    class="h-full rounded-full"
                    :class="healthColorClass"
                    :style="{ width: `${plant.healthScore}%` }"
                />
            </div>
        </div>
    </div>
</template>

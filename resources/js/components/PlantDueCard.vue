<script setup lang="ts">
import { computed } from 'vue';
import PlantThumbnail from '@/components/PlantThumbnail.vue';
import StatusPill from '@/components/StatusPill.vue';
import WaterButton from '@/components/WaterButton.vue';
import { getCareStatus } from '@/composables/usePlantCare';
import type { PlantSummary } from '@/types/plant';

const props = defineProps<{ plant: PlantSummary }>();

defineEmits<{ water: [] }>();

const status = computed(() => getCareStatus(props.plant.daysUntilWater));
</script>

<template>
    <div
        class="mb-2.5 flex items-center gap-3.5 rounded-[18px] border border-ink/6 bg-surface p-2.5 shadow-[0_4px_14px_-11px_rgba(37,48,35,0.5)]"
    >
        <div class="size-13.5 flex-none overflow-hidden rounded-[14px]">
            <PlantThumbnail :tint="plant.tint" />
        </div>
        <div class="min-w-0 flex-1">
            <div class="font-display text-[15px] font-bold text-ink">
                {{ plant.nickname }}
            </div>
            <div class="truncate text-xs text-ink-faint">
                {{ plant.commonName }}
            </div>
            <div class="mt-1">
                <StatusPill :status="status" />
            </div>
        </div>
        <WaterButton @water="$emit('water')" />
    </div>
</template>

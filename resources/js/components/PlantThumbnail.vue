<script setup lang="ts">
import { computed } from 'vue';
import { plantTileGradient } from '@/composables/usePlantCare';

type Props = {
    tint: string;
    fileLabel?: string;
};

const props = defineProps<Props>();

const background = computed(() => plantTileGradient(props.tint));
</script>

<template>
    <div class="relative h-full w-full overflow-hidden" :style="{ background }">
        <span
            class="absolute inset-0"
            style="
                background: repeating-linear-gradient(
                    45deg,
                    rgba(255, 255, 255, 0.09) 0 6px,
                    transparent 6px 13px
                );
            "
        />
        <span
            v-if="fileLabel"
            class="absolute bottom-2 left-2 font-mono text-[8.5px] tracking-wide text-white/80"
        >
            {{ fileLabel }}
        </span>
        <slot />
    </div>
</template>

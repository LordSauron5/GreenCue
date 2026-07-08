<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { Stethoscope } from '@lucide/vue';
import { computed, ref } from 'vue';
import ComingSoonCard from '@/components/ComingSoonCard.vue';
import PlantDueCard from '@/components/PlantDueCard.vue';
import PlantGridCard from '@/components/PlantGridCard.vue';
import SectionHeading from '@/components/SectionHeading.vue';
import WeeklyGoalCard from '@/components/WeeklyGoalCard.vue';
import MobileAppLayout from '@/layouts/MobileAppLayout.vue';
import type { PlantSummary } from '@/types/plant';

defineOptions({ layout: [MobileAppLayout, { active: 'home' }] });

const userName = 'Alex';
const streak = ref(12);

const goalTarget = ref(5);
const goalDone = ref(3);
const goalLabel = computed(() => {
    const remaining = goalTarget.value - goalDone.value;

    return remaining > 0
        ? `Care for ${remaining} more to earn the Sprout badge`
        : 'Sprout badge earned this week! 🌟';
});

const plants = ref<PlantSummary[]>([
    {
        id: 'monty',
        nickname: 'Monty',
        commonName: 'Swiss Cheese Monstera',
        scientificName: 'Monstera deliciosa',
        room: 'Living room',
        tint: '#3f7d55',
        healthScore: 88,
        daysUntilWater: 0,
        wateringIntervalDays: 7,
        waterText: 'Every 7 days',
        lightText: 'Bright, indirect',
        fertilizeText: 'Monthly, spring–fall',
        humidityText: 'Medium · 55%',
    },
    {
        id: 'goldie',
        nickname: 'Goldie',
        commonName: 'Golden Pothos',
        scientificName: 'Epipremnum aureum',
        room: 'Kitchen',
        tint: '#7fa05a',
        healthScore: 64,
        daysUntilWater: -1,
        wateringIntervalDays: 5,
        waterText: 'Every 5 days',
        lightText: 'Low to bright',
        fertilizeText: 'Every 6 weeks',
        humidityText: 'Low · 40%',
    },
    {
        id: 'drama',
        nickname: 'Drama',
        commonName: 'Calathea Orbifolia',
        scientificName: 'Goeppertia orbifolia',
        room: 'Bathroom',
        tint: '#5b8a86',
        healthScore: 71,
        daysUntilWater: 0,
        wateringIntervalDays: 4,
        waterText: 'Every 4 days',
        lightText: 'Medium, indirect',
        fertilizeText: 'Monthly',
        humidityText: 'High · 65%',
    },
    {
        id: 'hiss',
        nickname: 'Sir Hiss',
        commonName: 'Snake Plant',
        scientificName: 'Dracaena trifasciata',
        room: 'Bedroom',
        tint: '#6b8f71',
        healthScore: 95,
        daysUntilWater: 3,
        wateringIntervalDays: 14,
        waterText: 'Every 14 days',
        lightText: 'Any, tolerant',
        fertilizeText: 'Twice a year',
        humidityText: 'Low · 35%',
    },
    {
        id: 'frank',
        nickname: 'Frank',
        commonName: 'Fiddle Leaf Fig',
        scientificName: 'Ficus lyrata',
        room: 'Office',
        tint: '#4f7d6b',
        healthScore: 79,
        daysUntilWater: 5,
        wateringIntervalDays: 8,
        waterText: 'Every 8 days',
        lightText: 'Bright, indirect',
        fertilizeText: 'Monthly, spring–fall',
        humidityText: 'Medium · 50%',
    },
]);

const dueList = computed(() =>
    plants.value
        .filter((p) => p.daysUntilWater <= 0)
        .sort((a, b) => a.daysUntilWater - b.daysUntilWater),
);
const dueCount = computed(() => dueList.value.length);
const allCaught = computed(() => dueCount.value === 0);

const homeHeadline = computed(() =>
    dueCount.value > 0
        ? `${dueCount.value} ${dueCount.value === 1 ? 'plant is parched' : 'plants are parched'}`
        : "Everyone's happy today 🌿",
);

function water(id: string) {
    const plant = plants.value.find((p) => p.id === id);

    if (!plant) {
        return;
    }

    plant.daysUntilWater = plant.wateringIntervalDays;
    plant.healthScore = Math.min(100, plant.healthScore + 6);
    goalDone.value = Math.min(goalTarget.value, goalDone.value + 1);
}
</script>

<template>
    <Head title="Home" />

    <div class="px-5 pt-1.5 pb-8">
        <div class="mt-1.5 flex items-start justify-between">
            <div>
                <div class="text-sm font-medium text-ink-soft">
                    Morning, {{ userName }} 👋
                </div>
                <div
                    class="mt-1 max-w-[210px] font-display text-[27px] leading-tight font-bold tracking-tight text-ink"
                >
                    {{ homeHeadline }}
                </div>
            </div>
            <div
                class="flex flex-col items-center gap-0.5 rounded-2xl border border-ink/7 bg-surface px-3 py-2.25 shadow-[0_3px_10px_-6px_rgba(37,48,35,0.3)]"
            >
                <span class="text-lg leading-none">🔥</span>
                <span
                    class="font-display text-[17px] leading-none font-bold text-amber"
                >
                    {{ streak }}
                </span>
                <span
                    class="text-[9px] font-semibold tracking-wide text-ink-faint"
                >
                    DAY STREAK
                </span>
            </div>
        </div>

        <div class="mt-4.5">
            <WeeklyGoalCard
                :done="goalDone"
                :target="goalTarget"
                :label="goalLabel"
            />
        </div>

        <div class="mt-6">
            <SectionHeading title="Needs a drink">
                <span class="text-xs font-semibold text-water">
                    {{ dueCount }} today
                </span>
            </SectionHeading>

            <div
                v-if="allCaught"
                class="rounded-[20px] border border-ink/6 bg-surface px-5 py-6.5 text-center shadow-[0_4px_14px_-10px_rgba(37,48,35,0.4)]"
            >
                <div class="text-3xl">🌿</div>
                <div class="mt-1.5 font-display text-base font-bold text-ink">
                    All watered up!
                </div>
                <div class="mt-0.5 text-[13px] leading-snug text-ink-muted">
                    Your plants are living their best life.
                </div>
            </div>

            <PlantDueCard
                v-for="plant in dueList"
                :key="plant.id"
                :plant="plant"
                @water="water(plant.id)"
            />
        </div>

        <div class="mt-5.5">
            <SectionHeading title="Your jungle">
                <span class="text-xs font-semibold text-leaf">
                    See all {{ plants.length }} →
                </span>
            </SectionHeading>

            <div class="grid grid-cols-2 gap-3.25">
                <PlantGridCard
                    v-for="plant in plants"
                    :key="plant.id"
                    :plant="plant"
                />
            </div>
        </div>

        <ComingSoonCard
            :icon="Stethoscope"
            title="Plant Doctor"
            description="Snap a sick leaf, get a diagnosis."
        />
    </div>
</template>

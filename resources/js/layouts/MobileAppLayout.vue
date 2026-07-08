<script setup lang="ts">
import { House, Sprout, Bell, User } from '@lucide/vue';
import BottomNav from '@/components/BottomNav.vue';
import type { BottomNavItem } from '@/components/BottomNav.vue';
import { dashboard } from '@/routes';

defineProps<{ active: string }>();

const navItems: BottomNavItem[] = [
    { key: 'home', label: 'Home', icon: House, href: dashboard().url },
    { key: 'plants', label: 'Plants', icon: Sprout },
    { key: 'reminders', label: 'Reminders', icon: Bell },
    { key: 'me', label: 'Me', icon: User },
];
</script>

<template>
    <div
        class="flex h-dvh flex-col overflow-hidden bg-app-bg font-body text-ink"
        style="padding-top: var(--inset-top, 0px)"
    >
        <div class="flex-1 overflow-y-auto">
            <slot />
        </div>
        <BottomNav :items="navItems" :active="active" class="flex-none" />
    </div>
</template>

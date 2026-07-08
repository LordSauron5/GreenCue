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
        class="flex min-h-screen flex-col bg-app-bg font-body text-ink"
        style="padding-top: env(safe-area-inset-top)"
    >
        <div class="flex-1 overflow-y-auto">
            <slot />
        </div>
        <BottomNav :items="navItems" :active="active" />
    </div>
</template>

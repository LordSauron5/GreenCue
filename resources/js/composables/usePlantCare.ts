import type { CareStatus } from '@/types/plant';

export function getCareStatus(daysUntilWater: number): CareStatus {
    if (daysUntilWater < 0) {
        return {
            kind: 'overdue',
            label: `${Math.abs(daysUntilWater)}d overdue`,
            colorClass: 'text-terracotta',
            bgClass: 'bg-terracotta-soft',
            dotClass: 'bg-terracotta',
        };
    }

    if (daysUntilWater === 0) {
        return {
            kind: 'due-today',
            label: 'Thirsty today',
            colorClass: 'text-water',
            bgClass: 'bg-water-soft',
            dotClass: 'bg-water',
        };
    }

    return {
        kind: 'upcoming',
        label: `in ${daysUntilWater} days`,
        colorClass: 'text-ink-muted',
        bgClass: 'bg-surface-alt',
        dotClass: 'bg-ink-muted',
    };
}

export function getHealthColorClass(health: number): string {
    if (health >= 80) {
        return 'bg-leaf';
    }

    if (health >= 60) {
        return 'bg-amber-alt';
    }

    return 'bg-terracotta';
}

export function plantTileGradient(tint: string): string {
    return `linear-gradient(150deg, ${tint}, color-mix(in srgb, ${tint} 68%, #1b241a))`;
}

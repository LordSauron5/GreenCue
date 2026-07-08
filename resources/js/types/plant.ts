export type PlantSummary = {
    id: string;
    nickname: string;
    commonName: string;
    scientificName: string;
    room: string;
    tint: string;
    healthScore: number;
    daysUntilWater: number;
    wateringIntervalDays: number;
    waterText: string;
    lightText: string;
    fertilizeText: string;
    humidityText: string;
};

export type CareStatusKind = 'overdue' | 'due-today' | 'upcoming';

export type CareStatus = {
    kind: CareStatusKind;
    label: string;
    colorClass: string;
    bgClass: string;
    dotClass: string;
};

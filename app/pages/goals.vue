<template>
    <div class="p-5 gap-4 flex flex-col">
        <NavBar :header="'Goals'" :description="'Overview of your activities'" />
        <div class="flex flex-row justify-between w-full">
            <div class="flex flex-row gap-2">
                <UPopover>
                    <UButton color="neutral" variant="subtle" icon="i-lucide-calendar" class="cursor-pointer">
                        {{
                            selectedDate
                                ? df.format(selectedDate.toDate(getLocalTimeZone()))
                                : "Select a date"
                        }}
                    </UButton>
                    <template #content>
                        <UCalendar v-model="selectedDate" class="p-2 cursor-pointer" />
                    </template>
                </UPopover>
            </div>

            <div class="flex flex-row items-center">
                <div>
                    <UModal title="Add New Goal" description="Add a new goal to your account." :close="{
                        color: 'primary',
                        variant: 'outline',
                        class: 'rounded-full cursor-pointer',
                    }" :ui="{ footer: 'justify-end' }">
                        <UButton label="Add New Goal" color="primary" class="cursor-pointer" />

                        <template #body>
                            <GoalsAddNewGoal />
                        </template>

                        <template #footer="{ close }">
                            <UButton label="Cancel" color="neutral" variant="outline" @click="close"
                                class="cursor-pointer" />
                            <UButton label="Save Goal" color="primary" class="cursor-pointer" />
                        </template>
                    </UModal>
                </div>
            </div>
        </div>
        <div v-if="goals.length === 0">
            <GoalsNoGoals />
        </div>
        <div v-if="goals.length > 0">
            <GoalsWidgets/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    CalendarDate,
    DateFormatter,
    getLocalTimeZone,
} from "@internationalized/date";

type Goals = {
    id: string;
    title: string;
    description: string;
    targetDate: CalendarDate;
    progress: number;
}[];

const df = new DateFormatter("en-US", {
    dateStyle: "medium",
});

const selectedDate = shallowRef(new CalendarDate(2025, 1, 10));
const goals = ref<Goals>([]);

onMounted(() => {
    goals.value = [
        {
            id: "1",
            title: "Save for a new car",
            description: "Plan to save $20,000 for a new car by 2025.",
            targetDate: new CalendarDate(2025, 12, 31),
            progress: 50,
        },
        {
            id: "2",
            title: "Vacation in Hawaii",
            description: "Save $5,000 for a vacation in Hawaii by next summer.",
            targetDate: new CalendarDate(2024, 6, 30),
            progress: 20,
        },
    ];
});
</script>
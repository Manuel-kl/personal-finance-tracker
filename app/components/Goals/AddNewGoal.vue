<template>
    <div class="flex flex-col gap-5 p-5">
        <div class="flex flex-col gap-2">
            <p class="text-sm font-semibold">Goal Title</p>
            <UInput v-model="goalTitle" placeholder="Enter your goal title" />
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-sm font-semibold">Target Amount</p>
            <UInput v-model="targetAmount" type="number" placeholder="Enter target amount" />
        </div>
        <div class="grid grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
                <p class="text-sm font-semibold">Start Date</p>
                <UPopover>
                    <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
                        {{ startDate ? df.format(startDate.toDate(getLocalTimeZone())) : 'Select start date' }}
                    </UButton>

                    <template #content>
                        <UCalendar v-model="startDate" class="p-2" />
                    </template>
                </UPopover>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-sm font-semibold">End Date</p>
                <UPopover>
                    <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
                        {{ endDate ? df.format(endDate.toDate(getLocalTimeZone())) : 'Select end date' }}
                    </UButton>

                    <template #content>
                        <UCalendar v-model="endDate" class="p-2" />
                    </template>
                </UPopover>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-sm font-semibold">Description</p>
            <UTextarea v-model="description" placeholder="Describe your goal and how you plan to achieve it" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

const df = new DateFormatter('en-US', {
    dateStyle: 'medium'
});

const goalTitle = ref<string>('');
const targetAmount = ref<number | null>(null);
const startDate = shallowRef(new CalendarDate(2025, 8, 3));
const endDate = shallowRef<CalendarDate | null>(null);
const description = ref<string>('');
</script>
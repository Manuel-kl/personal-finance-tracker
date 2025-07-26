<template>
    <div class="flex flex-col p-5 bg-gray-100 min-h-screen gap-5">
        <div class="flex justify-between items-center pb-2">
            <div>
                <h1 class="text-2xl font-bold mb-1">Welcome back, Manuel!</h1>
                <p class="text-gray-300 text-sm">
                    It is the best time to manage your finances
                </p>
            </div>
            <div class="flex items-center gap-4">
                <UButton
                    icon="i-heroicons-bell"
                    class="text-gray-500 bg-inherit hover:bg-inherit hover:text-primary-800 cursor-pointer"
                />
                <div
                    class="flex items-center gap-1 border-1 border-gray-200 rounded-full px-1 py-1"
                >
                    <UAvatar
                        alt="User"
                        size="md"
                        class="w-10 h-10 text-sm border bg-primary-800 text-white border-primary-800"
                    >
                        AL
                    </UAvatar>
                    <div class="text-sm pr-3">
                        <div class="font-semibold">Manuel Langat</div>
                        <div class="text-gray-400">
                            mannuehkipkirui@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-between items-center">
            <div class="flex items-center">
                <UPopover>
                    <UButton
                        color="neutral"
                        variant="subtle"
                        icon="i-lucide-calendar"
                    >
                        <template v-if="modelValue.start">
                            <template v-if="modelValue.end">
                                {{
                                    df.format(
                                        modelValue.start.toDate(
                                            getLocalTimeZone(),
                                        ),
                                    )
                                }}
                                -
                                {{
                                    df.format(
                                        modelValue.end.toDate(
                                            getLocalTimeZone(),
                                        ),
                                    )
                                }}
                            </template>
                            <template v-else>
                                {{
                                    df.format(
                                        modelValue.start.toDate(
                                            getLocalTimeZone(),
                                        ),
                                    )
                                }}
                            </template>
                        </template>
                        <template v-else> Pick a date </template>
                    </UButton>
                    <template #content>
                        <UCalendar
                            v-model="modelValue"
                            class="p-2"
                            :number-of-months="2"
                            range
                        />
                    </template>
                </UPopover>
            </div>
            <div class="flex flex-row items-center gap-2">
                <div
                    class="bg-primary px-1 rounded-md text-white items-center flex"
                >
                    <UIcon name="mingcute:table-fill" width="24" height="24" />
                    <UButton class="">Manage Widgets</UButton>
                </div>
                <div
                    class="bg-primary px-1 rounded-md text-white items-center flex"
                >
                    <UIcon name="i-heroicons-plus" width="24" height="24" />
                    <UButton class="">Add Widgets</UButton>
                </div>
            </div>
        </div>

        <DashboardWidgetsComponent />

        <div class="grid grid-cols-3 gap-5">
            <UCard class="col-span-2 w-full flex flex-col justify-between">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-semibold">Money flow</span>
                    <UButton
                        icon="i-heroicons-arrow-trending-up"
                        color="neutral"
                        variant="ghost"
                        size="xs"
                    />
                </div>
                <ChartsBarChart />
            </UCard>

            <UCard class="col-span-1">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-semibold">Budget</span>
                    <UButton
                        icon="i-heroicons-arrow-trending-up"
                        color="neutral"
                        variant="ghost"
                        size="xs"
                    />
                </div>
                <ChartsDoughnutChart />
            </UCard>
        </div>

        <div class="grid grid-cols-3 gap-5">
            <UCard class="col-span-2">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-semibold">Recent transactions</span>
                    <UButton size="xs" color="neutral" variant="soft"
                        >See all</UButton
                    >
                </div>
                <TransactionsComponent :transactions="transactions" />
            </UCard>

            <UCard class="col-span-1">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-semibold">Saving goals</span>
                    <UButton
                        icon="i-heroicons-arrow-trending-up"
                        color="neutral"
                        variant="ghost"
                        size="xs"
                    />
                </div>
                <DashboardSavingGoals />
            </UCard>
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    CalendarDate,
    DateFormatter,
    getLocalTimeZone,
} from "@internationalized/date";

import TransactionsComponent from "~/components/TransactionsComponent.vue";

const df = new DateFormatter("en-US", {
    dateStyle: "medium",
});
const today = new Date();

const modelValue = shallowRef({
    start: new CalendarDate(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
    ),
    end: new CalendarDate(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
    ),
});

type Payment = {
    date: string;
    amount: number;
    paymentName: string;
    method: string;
    category: string;
};

const transactions = ref<Payment[]>([
    {
        date: "2024-03-11T15:30:00",
        amount: 594,
        paymentName: "Spotify",
        method: "Mpesa",
        category: "Subscription",
    },
    {
        date: "2024-03-10T09:15:00",
        amount: 2350,
        paymentName: "Grocery Shopping",
        method: "Card",
        category: "Food",
    },
    {
        date: "2024-03-09T18:45:00",
        amount: 850,
        paymentName: "Uber Ride",
        method: "Mpesa",
        category: "Transport",
    },
    {
        date: "2024-03-08T12:20:00",
        amount: 1200,
        paymentName: "Netflix",
        method: "Card",
        category: "Subscription",
    },
    {
        date: "2024-03-07T14:30:00",
        amount: 4500,
        paymentName: "Electricity Bill",
        method: "Bank Transfer",
        category: "Utilities",
    },
]);
</script>

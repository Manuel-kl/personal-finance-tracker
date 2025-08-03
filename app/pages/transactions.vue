<template>
    <div class="p-5 gap-4 flex flex-col">
        <NavBar :header="'Transactions'" :description="'Overview of your activities'" />
        <div class="flex flex-row justify-between w-full">
            <div class="flex flex-row gap-2">
                <UPopover>
                    <UButton color="neutral" variant="subtle" icon="i-lucide-calendar" class="cursor-pointer">
                        {{
                            modelValue
                                ? df.format(modelValue.toDate(getLocalTimeZone()))
                                : "Select a date"
                        }}
                    </UButton>

                    <template #content>
                        <UCalendar v-model="modelValue" class="p-2 cursor-pointer" />
                    </template>
                </UPopover>
                <USelect v-model="selectedCategory" :items="categoryOptions" class="cursor-pointer" />
                <USelect v-model="selectedMethod" :items="methodOptions" class="cursor-pointer" />
                <USelect v-model="selectedStatus" :items="statusOptions" class="cursor-pointer" />
            </div>

            <div class="flex flex-row items-center">
                <div>
                    <UModal title="Add New Transaction" description="Add a new transaction to your account." :close="{
                        color: 'primary',
                        variant: 'outline',
                        class: 'rounded-full cursor-pointer',
                    }" :ui="{ footer: 'justify-end' }">
                        <UButton label="Add New Transaction" color="primary" class="cursor-pointer" />

                        <template #body>
                            <AddNewTransaction />
                        </template>

                        <template #footer="{ close }">
                            <UButton label="Cancel" color="neutral" variant="outline" @click="close"
                                class="cursor-pointer" />
                            <UButton label="Save Transaction" color="primary" class="cursor-pointer" />
                        </template>
                    </UModal>
                </div>
                <UButton color="primary" icon="i-heroicons-arrow-down-tray-20-solid" class="ml-2 cursor-pointer"
                    label="Export CSV" />
            </div>
        </div>

        <TransactionsComponent :transactions="transactions" />
    </div>
</template>

<script setup lang="ts">
import {
    CalendarDate,
    DateFormatter,
    getLocalTimeZone,
} from "@internationalized/date";

const df = new DateFormatter("en-US", {
    dateStyle: "medium",
});

type Payment = {
    date: string;
    amount: number;
    paymentName: string;
    method: string;
    category: string;
    status?: "pending" | "success" | "failed";
};

const modelValue = shallowRef(new CalendarDate(2025, 1, 10));

const categoryOptions = ["All Categories", "Food", "Transport", "Utilities"];
const methodOptions = ["All Methods", "Card", "Mpesa", "Bank Transfer"];
const statusOptions = ["All Statuses", "Pending", "Completed", "Failed"];

const selectedCategory = ref(categoryOptions[0]);
const selectedMethod = ref(methodOptions[0]);
const selectedStatus = ref(statusOptions[0]);

const transactions = ref<Payment[]>([
    {
        date: "2024-03-11T15:30:00",
        amount: 594,
        paymentName: "Spotify",
        method: "Mpesa",
        category: "Subscription",
        status: "failed",
    },
    {
        date: "2024-03-10T09:15:00",
        amount: 2350,
        paymentName: "Grocery Shopping",
        method: "Card",
        category: "Food",
        status: "pending",
    },
    {
        date: "2024-03-09T18:45:00",
        amount: 850,
        paymentName: "Uber Ride",
        method: "Mpesa",
        category: "Transport",
        status: "success",
    },
    {
        date: "2024-03-08T12:20:00",
        amount: 1200,
        paymentName: "Netflix",
        method: "Card",
        category: "Subscription",
        status: "failed",
    },
    {
        date: "2024-03-07T14:30:00",
        amount: 4500,
        paymentName: "Electricity Bill",
        method: "Bank Transfer",
        category: "Utilities",
        status: "pending",
    },
]);
</script>
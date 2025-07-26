<template>
    <div class="p-5 gap-4 flex flex-col">
        <div>
            <p>Overview of your activities</p>
        </div>
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
                <USelect v-model="selectedCategory" :items="categoryOptions" class="cursor-pointer"/>
                <USelect v-model="selectedMethod" :items="methodOptions" class="cursor-pointer" />
                <USelect v-model="selectedStatus" :items="statusOptions" class="cursor-pointer" />
            </div>

            <div class="">
                <UButton color="primary" variant="solid" icon="i-heroicons-plus-circle-20-solid"
                    class="ml-2 cursor-pointer" label="Add New Transaction" />
                <UButton color="primary" variant="outline" icon="i-heroicons-arrow-down-tray-20-solid"
                    class="ml-2 cursor-pointer" label="Export CSV" />
            </div>
        </div>

        <TransactionsComponent :transactions="transactions" />
    </div>
</template>

<script setup lang="ts">
import TransactionsComponent from "~/components/TransactionsComponent.vue";
import { ref, shallowRef } from "vue";
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
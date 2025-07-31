<template>
    <div class="flex flex-col gap-5 p-5">
        <div class="grid grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
                <p class="text-sm font-semibold">Type</p>
                <USelectMenu v-model="selectedType" :items="types" placeholder="Select Transaction Type" />
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-sm font-semibold">Amount</p>
                <UInput v-model="amount" type="number" placeholder="Enter Amount" />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-sm font-semibold">Transaction Name</p>
            <UInput v-model="transactionName" placeholder="Name of the Transaction or a short description" />
        </div>
        <div class="grid grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
                <p class="text-sm font-semibold">Method</p>
                <USelectMenu v-model="selectedMethod" :items="methods" placeholder="Select Payment Method" />
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-sm font-semibold">Category</p>
                <USelectMenu v-model="selectedCategory" :items="categories" placeholder="Select Category" />
            </div>
        </div>
        <div class="grid grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
                <p class="text-sm font-semibold">Date</p>
                <UPopover>
                    <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
                        {{ transactionDate ? df.format(transactionDate.toDate(getLocalTimeZone())) : 'Select a date' }}
                    </UButton>

                    <template #content>
                        <UCalendar v-model="transactionDate" class="p-2" />
                    </template>
                </UPopover>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-sm font-semibold">Status</p>
                <USelectMenu v-model="selectedStatus" :items="statuses" placeholder="Select Status" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

const df = new DateFormatter('en-US', {
    dateStyle: 'medium'
});

const selectedType = ref<string | null>(null);
const amount = ref<number | null>(null);
const transactionName = ref<string>('');
const selectedMethod = ref<string | null>(null);
const selectedCategory = ref<string | null>(null);
const transactionDate = shallowRef(new CalendarDate(2022, 1, 10))
const selectedStatus = ref<string | null>(null);

const types = [
    "Income",
    "Expense",
    "Transfer",
];

const methods = [
    "Cash",
    "Credit Card",
    "Debit Card",
    "Bank Transfer",
    "PayPal",
];

const categories = [
    "Food",
    "Transport",
    "Housing",
    "Entertainment",
    "Utilities",
    "Savings",
    "Salary",
    "Gifts",
    "Investments",
    "Healthcare",
];

const statuses = [
    "Pending",
    "Completed",
    "Failed",
];
</script>
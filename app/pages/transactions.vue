<template>
    <div>
        <h1>Transactions</h1>
        <TransactionsComponent :transactions="transactions" />
    </div>
</template>

<script setup lang="ts">
import TransactionsComponent from "~/components/TransactionsComponent.vue";
import { ref } from "vue";

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

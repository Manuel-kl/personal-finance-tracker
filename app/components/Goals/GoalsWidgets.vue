<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div
            class="lg:col-span-1 flex flex-col justify-between p-5 rounded-lg border border-gray-200 dark:border-gray-800">
            <div class="flex flex-row justify-between items-center mb-2">
                <span class="tracking-tight font-bold">Total balance</span>
                <USelectMenu class="cursor-pointer" v-model="selectedAccount" :items="walletAccounts" />
            </div>
            <div class="flex items-baseline my-4 justify-center">
                <span class="text-2xl font-medium text-gray-500 dark:text-gray-400 mr-1">Ksh</span>
                <span class="text-5xl font-extrabold text-gray-900 dark:text-white">15,700.00</span>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-4 text-center">
                <div>
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Income</p>
                    <p class="text-lg font-semibold text-green-500">{{ totalIncome }}</p>
                </div>
                <div>
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Expenses</p>
                    <p class="text-lg font-semibold text-red-500">{{ totalExpenses }}</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-4">
                <UButton class="cursor-pointer" color="primary" icon="i-heroicons-arrow-right-on-rectangle">
                    Transfer
                </UButton>
                <UButton class="cursor-pointer" color="primary" icon="i-heroicons-envelope">
                    Request
                </UButton>
            </div>
        </div>
        <div class="lg:col-span-2 flex flex-col gap-5 p-2">
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col">
                    <p class="tracking-tight font-bold">Your Accounts</p>
                    <span class="text-xs tracking-tight">{{ accounts.length }} Accounts</span>
                </div>
                <UButton class="cursor-pointer" color="primary" icon="i-heroicons-plus-circle"
                    label="Add New Account" />
            </div>
            <div class="flex flex-row overflow-x-auto gap-5 p-2">
                <UCard v-for="account in accounts" :key="account.name"
                    :class="['w-[300px] flex-shrink-0 ring-0', colorMap[account.color]]">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ account.name }}</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">{{ account.description }}</p>
                        </div>
                        <UIcon name="i-heroicons-credit-card" class="text-2xl text-gray-500 dark:text-gray-400" />
                    </div>
                    <div class="mt-4">
                        <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ account.balance }}</p>
                    </div>
                </UCard>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const totalIncome = ref('Ksh 50,000.00');
const totalExpenses = ref('Ksh 34,300.00');
const selectedAccount = ref('All Accounts');
const walletAccounts = ref(['All Accounts', 'Account 1', 'Account 2', 'Account 3', 'Account 4']);

const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 dark:bg-blue-900/50',
    emerald: 'bg-emerald-50 dark:bg-emerald-900/50',
    rose: 'bg-rose-50 dark:bg-rose-900/50',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/50',
};

const accounts = ref([
  {
    name: 'Main Wallet',
    description: 'Primary account for daily spending.',
    balance: 'Ksh 25,340.50',
    color: 'blue',
  },
  {
    name: 'Savings',
    description: 'For long-term goals and emergencies.',
    balance: 'Ksh 150,000.00',
    color: 'emerald'
  },
  {
    name: 'Investment',
    description: 'Stocks and other investments.',
    balance: 'Ksh 78,900.00',
    color: 'rose'
  },
  {
    name: 'Travel Fund',
    description: 'Saving for the next adventure.',
    balance: 'Ksh 55,000.00',
    color: 'indigo'
  },
  {
    name: 'Car Maintenance',
    description: 'For vehicle upkeep and repairs.',
    balance: 'Ksh 32,500.00',
    color: 'blue'
  },
  {
    name: 'Emergency Fund',
    description: 'For unexpected life events.',
    balance: 'Ksh 210,000.00',
    color: 'emerald'
  }
]);
</script>

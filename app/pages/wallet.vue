<template>
  <div class="p-5">
    <NavBar :header="'Wallet'" :description="'Overview of your activities'" />
    <WalletWidgets />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
      <div class="mt-5 col-span-1 md:col-span-2">
        <UCard>
          <ChartsLineChart />
        </UCard>
        <UCard class="mt-5">
          <TransactionsComponent :transactions="transactions" />
        </UCard>
      </div>

      <UCard class="mt-5 col-span-1">
        <ChartsDoughnutChart />
      </UCard>
    </div>
  </div>
</template>
<script setup lang="ts">
type Transaction = {
  date: string;
  amount: number;
  paymentName: string;
  method: string;
  category: string;
  status?: string;
};

const transactions = ref<Transaction[]>([
  {
    date: '2023-10-01T12:00:00Z',
    amount: 5000,
    paymentName: 'Salary',
    method: 'Bank Transfer',
    category: 'Income',
    status: 'success'
  },
  {
    date: '2023-10-02T14:30:00Z',
    amount: 1500,
    paymentName: 'Groceries',
    method: 'Credit Card',
    category: 'Expenses',
    status: 'success'
  },
  {
    date: '2023-10-03T09:15:00Z',
    amount: 2000,
    paymentName: 'Utilities',
    method: 'Direct Debit',
    category: 'Expenses',
    status: 'pending'
  }
]);
</script>

<template>
    <div class="grid grid-cols-4 gap-5">
        <UCard class="col-span-1">
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-500">Total balance</span>
                <UButton icon="i-heroicons-arrow-trending-up" color="neutral" variant="ghost" size="xs" />
            </div>
            <div class="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">Ksh 15,700.00</div>
            <div class="text-success text-xs mt-1 flex items-center gap-1">
                <span>▲ 12.1%</span>
                <span class="text-gray-400">vs last month</span>
            </div>
        </UCard>
        <UCard class="col-span-1">
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-500">Income</span>
                <UButton icon="i-heroicons-arrow-trending-up" color="neutral" variant="ghost" size="xs" />
            </div>
            <div class="text-2xl font-bold">Ksh 8,500.00</div>
            <div class="text-success text-xs mt-1 flex items-center gap-1">
                <span>▲ 6.3%</span>
                <span class="text-gray-400">vs last month</span>
            </div>
        </UCard>
        <UCard class="col-span-1">
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-500">Expense</span>
                <UButton icon="i-heroicons-arrow-trending-up" color="neutral" variant="ghost" size="xs" />
            </div>
            <div class="text-2xl font-bold">Ksh 6,222.00</div>
            <div class="text-red-600 text-xs mt-1 flex items-center gap-1">
                <span>▼ 2.4%</span>
                <span class="text-gray-400">vs last month</span>
            </div>
        </UCard>
        <UCard class="col-span-1">
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-500">Total savings</span>
                <UButton icon="i-heroicons-arrow-trending-up" color="neutral" variant="ghost" size="xs" />
            </div>
            <div class="text-2xl font-bold">Ksh 32,913.00</div>
            <div class="text-success text-xs mt-1 flex items-center gap-1">
                <span>▲ 12.1%</span>
                <span class="text-gray-400">vs last month</span>
            </div>
        </UCard>
    </div>
</template>

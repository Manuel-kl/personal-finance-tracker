<template>
    <div class="flex flex-col p-5 bg-gray-100 min-h-screen gap-5">
        <div class="flex justify-between items-center pb-2">
            <div>
                <h1 class="text-2xl font-bold mb-1">Welcome back, Manuel!</h1>
                <p class="text-gray-300 text-sm">It is the best time to manage your finances</p>
            </div>
            <div class="flex items-center gap-4">
                <UButton icon="i-heroicons-bell"
                    class="text-gray-500 bg-inherit hover:bg-inherit hover:text-primary-800 cursor-pointer" />
                <div class="flex items-center gap-1 border-1 border-gray-200 rounded-full px-1 py-1">
                    <UAvatar alt="User" size="md"
                        class="w-10 h-10 text-sm border bg-primary-800 text-white border-primary-800">
                        AL
                    </UAvatar>
                    <div class="text-sm pr-3">
                        <div class="font-semibold">Manuel Langat</div>
                        <div class="text-gray-400">mannuehkipkirui@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-between items-center">
            <div class="flex items-center">
                <UPopover>
                    <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
                        <template v-if="modelValue.start">
                            <template v-if="modelValue.end">
                                {{ df.format(modelValue.start.toDate(getLocalTimeZone())) }} - {{
                                    df.format(modelValue.end.toDate(getLocalTimeZone())) }}
                            </template>

                            <template v-else>
                                {{ df.format(modelValue.start.toDate(getLocalTimeZone())) }}
                            </template>
                        </template>
                        <template v-else>
                            Pick a date
                        </template>
                    </UButton>

                    <template #content>
                        <UCalendar v-model="modelValue" class="p-2" :number-of-months="2" range />
                    </template>
                </UPopover>
            </div>
            <div class="flex flex-row items-center gap-2">
                <div class="bg-primary px-1 rounded-md text-white items-center flex">
                    <UIcon name="mingcute:table-fill" width="24" height="24" />
                    <UButton class="">Manage Widgets</UButton>
                </div>
                <div class="bg-primary px-1 rounded-md text-white items-center flex">
                    <UIcon name="i-heroicons-plus" width="24" height="24" />
                    <UButton class="">Add Widgets</UButton>
                </div>
            </div>
        </div>

        <!-- Summary Cards -->
        <div class="grid grid-cols-4 gap-5">
            <UCard class="col-span-1">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-500">Total balance</span>
                    <UButton icon="i-heroicons-arrow-trending-up" color="neutral" variant="ghost" size="xs" />
                </div>
                <div class="text-2xl font-bold">Ksh 15,700.00</div>
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

        <div class="grid grid-cols-3 gap-5">
            <UCard class="col-span-2  w-full flex flex-col justify-between">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-semibold">Money flow</span>
                    <UButton icon="i-heroicons-arrow-trending-up" color="neutral" variant="ghost" size="xs" />
                </div>
                <ChartsBarChart />
            </UCard>

            <UCard class="col-span-1">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-semibold">Budget</span>
                    <UButton icon="i-heroicons-arrow-trending-up" color="neutral" variant="ghost" size="xs" />
                </div>
                <ChartsDoughnutChart/>
            </UCard>
        </div>

        <!-- Bottom Grid: Recent Transactions & Saving Goals -->
        <div class="grid grid-cols-3 gap-5">
            <!-- Recent Transactions -->
            <UCard class="col-span-2">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-semibold">Recent transactions</span>
                    <UButton size="xs" color="neutral" variant="soft">See all</UButton>
                </div>
                <table class="w-full text-sm">
                    <thead>
                        <tr class="text-gray-400">
                            <th class="text-left py-2">DATE</th>
                            <th class="text-left py-2">AMOUNT</th>
                            <th class="text-left py-2">PAYMENT METHOD</th>
                            <th class="text-left py-2">CATEGORY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-t">
                            <td class="py-2">25 Jul 12:30</td>
                            <td class="py-2">- $10</td>
                            <td class="py-2">YouTube <span class="text-gray-400 ml-2">VISA "*3254"</span></td>
                            <td class="py-2">Subscription</td>
                        </tr>
                        <tr class="border-t">
                            <td class="py-2">26 Jul 15:00</td>
                            <td class="py-2">- $150</td>
                            <td class="py-2">Reserved <span class="text-gray-400 ml-2">Mastercard "*2154"</span></td>
                            <td class="py-2">Shopping</td>
                        </tr>
                        <tr class="border-t">
                            <td class="py-2">27 Jul 9:00</td>
                            <td class="py-2">- $80</td>
                            <td class="py-2">Yapashka <span class="text-gray-400 ml-2">Mastercard "*2154"</span></td>
                            <td class="py-2">Cafe & Restaurants</td>
                        </tr>
                    </tbody>
                </table>
            </UCard>
            <!-- Saving Goals -->
            <UCard class="col-span-1">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-semibold">Saving goals</span>
                    <UButton icon="i-heroicons-arrow-trending-up" color="neutral" variant="ghost" size="xs" />
                </div>
                <div class="mb-4">
                    <div class="flex justify-between mb-1">
                        <span>MacBook Pro</span>
                        <span class="text-primary-700 font-semibold">$1,650</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div class="bg-primary-700 h-2 rounded-full" style="width: 25%"></div>
                    </div>
                    <div class="flex justify-between mb-1">
                        <span>New car</span>
                        <span class="text-primary-500 font-semibold">$60,000</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 42%"></div>
                    </div>
                    <div class="flex justify-between mb-1">
                        <span>New house</span>
                        <span class="text-primary-300 font-semibold">$150,000</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-primary-300 h-2 rounded-full" style="width: 3%"></div>
                    </div>
                </div>
            </UCard>
        </div>
    </div>
</template>
<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

const df = new DateFormatter('en-US', {
    dateStyle: 'medium'
});
const today = new Date();

const modelValue = shallowRef({
    start: new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate()),
    end: new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate())
})
</script>
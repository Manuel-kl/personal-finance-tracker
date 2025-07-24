<template>
    <div class="flex flex-col justify-between w-full h-full pb-10">
        <div class="flex gap-4 mb-4 justify-end">
            <USelectMenu
                v-model="selectedAccount"
                :items="accountOptions"
                size="sm"
                placeholder="Select Account"
                @change="generateChartData"
            />
            <UPopover v-model:open="open" :popper="{ placement: 'bottom-end' }">
                <UButton
                    color="neutral"
                    variant="outline"
                    icon="i-heroicons-calendar-days-20-solid"
                    :label="selectedYear.toString()"
                />
                <template #content>
                    <YearPicker
                        v-model="selectedYear"
                        @update:modelValue="generateChartData"
                        @year-selected="closePopover"
                    />
                </template>
            </UPopover>
        </div>
        <Bar :data="chartData" />
    </div>
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";
import YearPicker from "~/components/YearPicker.vue";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
);

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        backgroundColor: string;
        data: (number | null)[];
    }[];
}
const open = ref<boolean>(false);
const chartData = ref<ChartData>({ labels: [], datasets: [] });

const selectedAccount = ref("All Accounts");
const selectedYear = ref(new Date().getFullYear());
const isYearExplicitlySelected = ref(false);
const accountOptions = ref([
    "All Accounts",
    "Account A",
    "Account B",
    "Account C",
]);

const closePopover = () => {
    open.value = false;
    isYearExplicitlySelected.value = true;
};

const generateChartData = () => {
    const labels = [];
    const incomeData = [];
    const expenseData = [];
    const today = new Date();

    if (
        selectedYear.value === today.getFullYear() &&
        !isYearExplicitlySelected.value
    ) {
        for (let i = 11; i >= 0; i--) {
            const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
            labels.push(date.toLocaleString("default", { month: "short" }));
            incomeData.push(
                getDummyData(
                    selectedAccount.value,
                    date.getMonth(),
                    selectedYear.value,
                    "income",
                ),
            );
            expenseData.push(
                getDummyData(
                    selectedAccount.value,
                    date.getMonth(),
                    selectedYear.value,
                    "expense",
                ),
            );
        }

        const nextMonthDate = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            1,
        );
        labels.push(
            nextMonthDate.toLocaleString("default", { month: "short" }),
        );
        incomeData.push(null);
        expenseData.push(null);
    } else {
        for (let i = 0; i < 12; i++) {
            const date = new Date(selectedYear.value, i, 1);
            labels.push(date.toLocaleString("default", { month: "short" }));
            incomeData.push(
                getDummyData(
                    selectedAccount.value,
                    i,
                    selectedYear.value,
                    "income",
                ),
            );
            expenseData.push(
                getDummyData(
                    selectedAccount.value,
                    i,
                    selectedYear.value,
                    "expense",
                ),
            );
        }
    }

    chartData.value = {
        labels: labels,
        datasets: [
            {
                label: "Income",
                backgroundColor: "#7664E4",
                data: incomeData,
            },
            {
                label: "Expense",
                backgroundColor: "#BFB7FF",
                data: expenseData,
            },
        ],
    };
};

const getDummyData = (
    account: string,
    month: number,
    year: number,
    type: "income" | "expense",
) => {
    let seed = month + year;
    if (account === "Account A") seed += 100;
    if (account === "Account B") seed += 200;
    if (account === "Account C") seed += 300;

    Math.seedrandom(seed.toString());

    if (type === "income") {
        return Math.floor(Math.random() * 300) + 100;
    } else {
        return Math.floor(Math.random() * 200) + 50;
    }
};

declare global {
    interface Math {
        seedrandom: (seed: string) => () => number;
    }
}

Math.seedrandom =
    Math.seedrandom ||
    (function (seed: string) {
        let x = 0;
        for (let i = 0; i < seed.length; i++) {
            x = (x << 5) - x + seed.charCodeAt(i);
            x |= 0;
        }
        return function () {
            x = Math.sin(x++) * 10000;
            return x - Math.floor(x);
        };
    })(new Date().getTime().toString());

generateChartData();

import { watch } from "vue";
watch(
    [selectedAccount, selectedYear],
    ([newAccount, newYear], [oldAccount, oldYear]) => {
        if (newYear !== oldYear) {
            isYearExplicitlySelected.value = true;
        }
        generateChartData();
    },
);
</script>

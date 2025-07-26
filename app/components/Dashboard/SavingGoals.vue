<template>
    <div>
        <div v-for="goal in savingGoals" :key="goal.title" class="mb-4">
            <div class="flex justify-between items-center mb-1 text-sm">
                <span>{{ goal.title }}</span>
                <span>{{ goal.amount }} / {{ goal.targetAmount }}</span>
            </div>
            <UProgress v-model="goal.amount" :max="goal.targetAmount" size="xl" />
        </div>
    </div>
</template>
<script setup lang="ts">
interface SavingGoal {
    title: string;
    amount: number;
    targetAmount: number;
}

const savingGoals = ref<SavingGoal[]>([]);

onMounted(() => {
    const dummyData = [
        {
            title: "BMW M7 (just 14.9 million to go 😎)",
            amount: 100000,
            targetAmount: 15000000,
        },
        {
            title: "Audi R8 Spyder",
            amount: 1000000,
            targetAmount: 12000000,
        },
        {
            title: "MacBook M2 Pro",
            amount: 2000,
            targetAmount: 3000,
        },
        {
            title: "New iPhone",
            amount: 1000,
            targetAmount: 1500,
        }
    ]

    savingGoals.value = dummyData;
});
</script>

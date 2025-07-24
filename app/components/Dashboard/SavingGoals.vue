<template>
    <div>
        <div v-for="goal in savingGoals" :key="goal.title" class="mb-4">
            <div class="flex justify-between items-center mb-1 text-sm">
                <span>{{ goal.title }}</span>
                <span>{{ goal.amount }} / {{ goal.targetAmount }}</span>
            </div>
            <UProgress
                v-model="goal.amount"
                :max="goal.targetAmount"
                size="xl"
            />
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
        { title: "Macbook", amount: 400, targetAmount: 500 },
        { title: "BMW C7", amount: 400, targetAmount: 1000 },
        { title: "Iphone 19", amount: 1200, targetAmount: 1500 },
    ];
    savingGoals.value = dummyData;
});
</script>

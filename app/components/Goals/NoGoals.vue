<template>
    <div class="flex flex-col items-center justify-center h-full gap-8">
        <div class="flex flex-row items-center justify-center gap-4">
            <img src="../../assets/images/img-3.png" alt="Goals chart" class="w-[350px] -rotate-15 animate-gentle-bounce hover:animate-pulse transition-transform duration-300 hover:scale-110 opacity-80" />
            <img src="../../assets/images/img-4.png" alt="Goals chart" class="w-[350px] rotate-15 animate-gentle-bounce hover:animate-pulse transition-transform duration-300 hover:scale-110 opacity-80" />
        </div>
        <div class="flex flex-col items-center gap-1 text-center tracking-tight">
            <p class="font-bold text-sm">You haven't added any goals yet</p>
            <p class="font-thin text-sm ">Start planning your future now! Create your first goal and start saving for it
            </p>
        </div>
        <div>
            <UModal title="Add New Goal" description="Add a new goal to your account." :close="{
                color: 'primary',
                variant: 'outline',
                class: 'rounded-full cursor-pointer',
            }" :ui="{ footer: 'justify-end' }">
                <UButton label="Add New Goal" color="primary" class="cursor-pointer" />

                <template #body>
                    <GoalsAddNewGoal />
                </template>

                <template #footer="{ close }">
                    <UButton label="Cancel" color="neutral" variant="outline" @click="close" class="cursor-pointer" />
                    <UButton label="Save Goal" color="primary" class="cursor-pointer" />
                </template>
            </UModal>
        </div>
    </div>
</template>

<style scoped>
@keyframes gentle-bounce {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-gentle-bounce {
  animation: gentle-bounce 2s ease-in-out infinite;
}
</style>
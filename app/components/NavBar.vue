<template>
    <div class="flex justify-between items-center pb-2">
        <div>
            <h1 class="text-2xl font-bold mb-1"> {{ header }} </h1>
            <p class="text-gray-300 text-sm">
                {{ description }}
            </p>
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
                    <div class="text-gray-400">
                        mannuehkipkirui@gmail.com
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    header: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    }
});
</script>
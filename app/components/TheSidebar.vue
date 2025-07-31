<template>
    <aside class="fixed flex flex-col justify-between p-5 bg-primary-100 h-screen transition-all duration-300" :class="{
        'max-w-[200px]': !isSideBarHidden,
        'max-w-[80px]': isSideBarHidden,
    }">
        <div class="flex flex-col gap-5">
            <div class="flex flex-row items-center gap-5">
                <img class="h-10 w-10 rounded-full" src="../assets/images/logo.png" alt="logo" />
                <p class="font-md" :class="{ hidden: isSideBarHidden }">
                    FinSet
                </p>
            </div>
            <div class="flex justify-end">
                <div v-if="!isSideBarHidden" @click="toggleSidebar"
                    class="rounded-full h-6 w-6 flex justify-center items-center bg-primary-100 border border-primary-200">
                    <UIcon name="tabler:chevron-left" width="24" height="24"
                        class="cursor-pointer hover:bg-primary-700 transition-colors duration-300" />
                </div>
                <div v-else @click="toggleSidebar"
                    class="rounded-full h-6 w-6 flex justify-center items-center bg-primary-100 border border-primary-200">
                    <UIcon name="tabler:chevron-right" width="24" height="24"
                        class="cursor-pointer hover:bg-primary-700 transition-colors duration-300" />
                </div>
            </div>
            <div class="flex flex-col gap-1 justify-center">
                <NuxtLink to="/"
                    class="flex items-center gap-2 py-2 px-3 hover:bg-primary-700 hover:text-white rounded-full transition-colors duration-300"
                    active-class="bg-primary-700 text-white">
                    <UIcon name="mingcute:table-fill" width="24" height="24" />
                    <span class="text-sm" :class="{ hidden: isSideBarHidden }">Dashboard</span>
                </NuxtLink>
                <NuxtLink to="/transactions"
                    class="flex items-center gap-2 py-2 px-3 hover:bg-primary-700 hover:text-white rounded-full transition-colors duration-300"
                    active-class="bg-primary-700 text-white">
                    <UIcon name="mingcute:transfer-fill" width="24" height="24" />
                    <span class="text-sm" :class="{ hidden: isSideBarHidden }">Transactions</span>
                </NuxtLink>
                <NuxtLink to="/wallet"
                    class="flex items-center gap-2 py-2 px-3 hover:bg-primary-700 hover:text-white rounded-full transition-colors duration-300"
                    active-class="bg-primary-700 text-white">
                    <UIcon name="mingcute:wallet-fill" width="24" height="24" />
                    <span class="text-sm" :class="{ hidden: isSideBarHidden }">Wallet</span>
                </NuxtLink>
                <NuxtLink to="/goals"
                    class="flex items-center gap-2 py-2 px-3 hover:bg-primary-700 hover:text-white rounded-full transition-colors duration-300"
                    active-class="bg-primary-700 text-white">
                    <UIcon name="mingcute:target-fill" width="24" height="24" />
                    <span class="text-sm" :class="{ hidden: isSideBarHidden }">Goals</span>
                </NuxtLink>
                <NuxtLink to="/budget"
                    class="flex items-center gap-2 py-2 px-3 hover:bg-primary-700 hover:text-white rounded-full transition-colors duration-300"
                    active-class="bg-primary-700 text-white">
                    <UIcon name="mingcute:receive-money-line" width="24" height="24" />
                    <span class="text-sm" :class="{ hidden: isSideBarHidden }">Budget</span>
                </NuxtLink>
                <NuxtLink to="/analytics"
                    class="flex items-center gap-2 py-2 px-3 hover:bg-primary-700 hover:text-white rounded-full transition-colors duration-300"
                    active-class="bg-primary-700 text-white">
                    <UIcon name="material-symbols:analytics-outline-rounded" width="24" height="24" />
                    <span class="text-sm" :class="{ hidden: isSideBarHidden }">Analytics</span>
                </NuxtLink>
                <NuxtLink to="/settings"
                    class="flex items-center gap-2 py-2 px-3 hover:bg-primary-700 hover:text-white rounded-full transition-colors duration-300"
                    active-class="bg-primary-700 text-white">
                    <UIcon name="mingcute:settings-5-line" width="24" height="24" />
                    <span class="text-sm" :class="{ hidden: isSideBarHidden }">Settings</span>
                </NuxtLink>
            </div>
        </div>
        <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-1">
                <NuxtLink to="/help"
                    class="flex items-center gap-2 py-2 px-3 hover:bg-primary-700 hover:text-white rounded-full transition-colors duration-300"
                    active-class="bg-primary-700 text-white">
                    <UIcon name="material-symbols:help-outline" width="24" height="24" />
                    <span class="text-sm" :class="{ hidden: isSideBarHidden }">Help</span>
                </NuxtLink>
                <div class="flex items-center gap-2 py-2 px-3 hover:bg-primary-700 hover:text-white rounded-full transition-colors duration-300 cursor-pointer"
                    @click="showLogoutToast">
                    <UIcon name="material-symbols:logout" width="24" height="24" />
                    <span class="text-sm" :class="{ hidden: isSideBarHidden }">Logout</span>
                </div>
            </div>
            <div
                class="flex items-center rounded-full bg-primary-100 border-1 border-primary-300 w-fit p-1 cursor-pointer">
                <div v-if="!darkMode || !isSideBarHidden"
                    class="flex justify-center items-center p-2 rounded-full transition-colors duration-300"
                    :class="{ 'bg-primary-700': !darkMode }" @click="toggleDarkMode">
                    <UIcon name="mingcute:sun-line" width="24" height="24"
                        class="p-1 rounded-full transition-colors duration-300" :class="{ 'text-white': !darkMode }" />
                </div>
                <div v-if="darkMode || !isSideBarHidden"
                    class="flex justify-center items-center p-2 rounded-full transition-colors duration-300"
                    :class="{ 'bg-primary-700': darkMode }" @click="toggleDarkMode">
                    <UIcon name="mingcute:moon-line" width="24" height="24"
                        class="p-1 rounded-full transform -scale-x-100 transition-colors duration-300"
                        :class="{ 'text-white': darkMode }" />
                </div>
            </div>
        </div>
    </aside>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { UIcon } from "#components";

const emit = defineEmits(["toggle-sidebar"]);
const isSideBarHidden = ref<boolean>(false);
const toast = useToast();
const darkMode = ref<boolean>(false);

const toggleSidebar = () => {
    isSideBarHidden.value = !isSideBarHidden.value;
    emit("toggle-sidebar", isSideBarHidden.value);
};

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    toast.add({
        title: "Hold your horses!",
        description:
            "This feature is still under construction. But hey, at least the button looks cool, right?",
        color: "info",
    });
};

const showLogoutToast = () => {
    toast.add({
        title: "Logging out? Not so fast!",
        description:
            "Just kidding! This is a demo, so no actual logging out today. Maybe tomorrow?",
        color: "info",
    });
};
</script>

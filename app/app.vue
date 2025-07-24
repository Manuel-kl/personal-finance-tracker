<template>
    <UApp :toaster="{ position: 'top-right' }">
        <div class="flex">
            <TheSidebar @toggle-sidebar="onSidebarToggle" />
            <main class="flex-1" :style="{ marginLeft: mainContentMargin }">
                <NuxtPage />
            </main>
        </div>
    </UApp>
</template>
<script setup lang="ts">
const mainContentMargin = ref("170px");

const onSidebarToggle = (isSideBarHidden: boolean) => {
    mainContentMargin.value = isSideBarHidden ? "80px" : "170px";
};
</script>

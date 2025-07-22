<template>
  <UApp :toaster="{ position: 'top-right' }">
    <div class="flex">
      <TheSidebar />
      <main class="flex-1">
        <NuxtPage />
      </main>
    </div>
  </UApp>
</template>

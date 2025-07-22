<template>
  <div class="year-picker">
    <div class="year-picker-header">
      <button @click="changeDecade(-10)">&lt;&lt;</button>
      <button @click="changeYearRange(-1)">&lt;</button>
      <span>{{ startYear }} - {{ endYear }}</span>
      <button @click="changeYearRange(1)">&gt;</button>
      <button @click="changeDecade(10)">&gt;&gt;</button>
    </div>
    <div class="year-picker-grid">
      <div v-for="year in yearsInView" :key="year" :class="{ 'year-item': true, 'selected': year === modelValue }"
        @click="selectYear(year)">
        {{ year }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = defineProps<{
  modelValue: number;
}>();

const emit = defineEmits(['update:modelValue', 'year-selected']);

const startYear = ref(Math.floor(props.modelValue / 10) * 10);
const endYear = computed(() => startYear.value + 9);

const yearsInView = computed(() => {
  const years = [];
  for (let i = 0; i < 10; i++) {
    years.push(startYear.value + i);
  }
  return years;
});

const changeYearRange = (direction: number) => {
  startYear.value += direction;
};

const changeDecade = (direction: number) => {
  startYear.value += direction;
};

const selectYear = (year: number) => {
  emit('update:modelValue', year);
  emit('year-selected');
};

watch(() => props.modelValue, (newValue) => {
  if (newValue < startYear.value || newValue > endYear.value) {
    startYear.value = Math.floor(newValue / 10) * 10;
  }
});
</script>

<style scoped>
.year-picker {
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.year-picker-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.year-picker-header button {
  background-color: slate;
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.year-picker-header button:hover {
  background-color: #8470FF;
  color: white;
}

.year-picker-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}

.year-item {
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}

.year-item:hover {
  background-color: #f0f0f0;
}

.year-item.selected {
  background-color: #8470FF;
  color: white;
}
</style>

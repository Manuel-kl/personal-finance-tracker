<template>
  <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 20px;">
    <div style="height: 300px; flex: 1;">
      <Doughnut :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartData {
  labels: string[];
  datasets: {
    backgroundColor: string[];
    data: number[];
  }[];
}

const chartData = ref<DoughnutChartData>({
  labels: [
    'Food', 'Transport', 'Housing', 'Entertainment', 'Utilities',
    'Savings', 'Salary', 'Gifts', 'Investments', 'Healthcare'
  ],
  datasets: [
    {
      backgroundColor: [
        '#7664E4',
        '#A498FF',
        '#D6D2FF',
        '#111113',
        '#343438',
        '#82828C',
        '#297B32',
        '#F9970C',
        '#E83838',
        '#BFB7FF'
      ],
      data: [400, 250, 300, 150, 100, 500, 800, 120, 300, 180]
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'left',
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || '';
          const value = context.raw;
          return `${label}: $${value}`;
        }
      }
    }
  }
});
</script>
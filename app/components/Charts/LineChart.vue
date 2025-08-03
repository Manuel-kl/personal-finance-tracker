<template>
  <div class="w-full h-[400px]">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const labels = Array.from({ length: 30 }, (_, i) => {
  const date = new Date()
  date.setDate(date.getDate() - (29 - i))
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
})

const chartData = {
  labels,
  datasets: [
    {
      label: 'Income',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20000) + 500),
      borderColor: '#7664E4',
      backgroundColor: 'rgba(118, 100, 228, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Expenses',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000) + 500),
      borderColor: '#FF6384',
      backgroundColor: 'rgba(255, 99, 132, 0.1)',
      tension: 0.4
    }
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Income vs Expenses'
    }
  },
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Date'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Amount (KES)'
      },
    }
  }
}
</script>

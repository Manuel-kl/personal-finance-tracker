<template>
  <div class="w-full h-[400px]">
    <canvas ref="chartRef" class="w-full h-full"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
} from 'chart.js'

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale
)

const chartRef = ref<HTMLCanvasElement | null>(null)

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
      tension: 0.4,
    },
    {
      label: 'Expenses',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000) + 500),
      borderColor: '#FF6384',
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
      position: 'top'
    },
    title: {
      display: true,
      text: 'Income vs Expenses'
    }
  },
  interaction: {
    mode: 'index',
    intersect: false
  },
  scales: {
    x: {
      type: 'category',
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

onMounted(() => {
  if (!chartRef.value) return

  new Chart(chartRef.value, {
    type: 'line',
    data: chartData,
    options: chartOptions
  })
})
</script>

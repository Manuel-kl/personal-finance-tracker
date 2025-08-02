<template>
  <div class="h-[400px]">
    <canvas ref="chartCanvas" />
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
} from 'chart.js'

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
)

const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chartInstance: ChartJS | null = null

const generateChartData = () => {
  const labels = Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (29 - i))
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  })

  const incomeData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 20000) + 500)
  const expensesData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000) + 500)

  return {
    labels,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        borderColor: '#7664E4',
        backgroundColor: 'rgba(118, 100, 228, 0.2)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Expenses',
        data: expensesData,
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  }
}

const renderChart = () => {
  if (!chartCanvas.value) return

  const ctx = chartCanvas.value.getContext('2d')
  if (!ctx) return

  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new ChartJS(ctx, {
    type: 'line',
    data: generateChartData(),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: false
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
  })
};

onMounted(() => {
  renderChart()
});
</script>

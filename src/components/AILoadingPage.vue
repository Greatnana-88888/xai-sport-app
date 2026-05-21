<template>
  <div class="min-h-screen bg-bg flex flex-col">
    <!-- 顶部状态栏 -->
    <div class="h-10" style="background-color: #f5f7fa; color: #f5f7fa;"></div>
    
    <!-- 顶部导航栏 -->
    <div class="px-4 py-3 flex items-center">
      <button class="p-1.5">
        <Home class="w-6 h-6 text-text-secondary" />
      </button>
      <span class="flex-1 text-center text-title font-semibold text-primary-dark">CoachAI</span>
      <div class="w-10 h-10 rounded-full overflow-hidden">
        <img src="/images/coach-ai.png" alt="avatar" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="flex-1 flex flex-col items-center justify-center px-6 py-8">
      <!-- AI形象 -->
      <div class="relative mb-8">
        <div class="w-56 h-56 rounded-full border border-border flex items-center justify-center">
          <div class="w-48 h-48 rounded-full border border-border/50 flex items-center justify-center">
            <img src="/images/coachai.front.png" alt="CoachAI" class="w-40 h-40 object-contain" />
          </div>
        </div>
        <!-- 加载指示器 -->
        <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div v-for="i in 3" :key="i" 
               class="w-2 h-2 rounded-full"
               :class="loadingStep >= i ? 'bg-primary' : 'bg-border'"
          ></div>
        </div>
      </div>

      <!-- 标题 -->
      <div class="text-center mb-4">
        <h1 class="text-[32px] font-semibold text-primary-dark mb-2">AI 智能教练已就绪</h1>
        <p class="text-body font-normal text-text-secondary">正在分析您的身体数据与运动习惯...</p>
      </div>

      <!-- 进度条 -->
      <div class="w-full max-w-sm mb-8">
        <div class="bg-white rounded-[24px] p-4 shadow-low">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <Zap class="w-5 h-5 text-primary-dark" />
            </div>
            <div class="flex-1">
              <div class="text-body font-medium text-primary-dark">同步健康数据</div>
            </div>
            <span class="text-body font-semibold text-primary-dark">{{ progress }}%</span>
          </div>
          <div class="h-2 bg-border rounded-full overflow-hidden">
            <div class="h-full bg-primary-dark rounded-full transition-all duration-300" 
                 :style="{ width: progress + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- AI小球按钮 -->
      <button @click="handleComplete" class="relative mb-4">
        <div class="w-24 h-24 rounded-full ai-circle flex items-center justify-center">
          <span class="text-[28px] font-bold ai-text">AI</span>
        </div>
      </button>

      <p class="text-small font-normal text-text-secondary text-center">AI分析完毕后，点击小球即可开始与CoachAI开始对话</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Home, Zap } from 'lucide-vue-next'

const emit = defineEmits(['complete'])

const progress = ref(0)
const loadingStep = ref(1)
let intervalId = null

const startProgress = () => {
  intervalId = setInterval(() => {
    if (progress.value < 85) {
      progress.value += 1
      if (progress.value >= 30 && loadingStep.value < 2) loadingStep.value = 2
      if (progress.value >= 60 && loadingStep.value < 3) loadingStep.value = 3
    } else {
      clearInterval(intervalId)
    }
  }, 50)
}

const handleComplete = () => {
  if (intervalId) clearInterval(intervalId)
  progress.value = 100
  setTimeout(() => {
    emit('complete')
  }, 500)
}

onMounted(() => {
  startProgress()
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.ai-circle {
  background: 
    radial-gradient(ellipse 86.8px 63.6px at 25% 25%, rgba(255, 255, 255, 0.85) 0%, transparent 70%),
    radial-gradient(ellipse 18.8px 12.6px at 25% 25%, rgba(255, 255, 255, 1) 0%, transparent 70%),
    radial-gradient(ellipse 43.4px 31.8px at 20% 20%, rgba(255, 255, 255, 0.95) 0%, transparent 70%),
    radial-gradient(ellipse 9.4px 6.3px at 70% 75%, rgba(255, 255, 255, 0.7) 0%, transparent 70%),
    radial-gradient(ellipse 86.8px 63.6px at 80% 80%, rgba(255, 255, 255, 0.5) 0%, transparent 70%),
    radial-gradient(130% 130% at 92% 92%, #F8FFD4 0%, #AED100 55%, #D3FE00 100%);
  box-shadow: 
    inset 8.53px 8.53px 7.25px #D4FF00,
    inset -2.56px -2.56px 4.26px rgba(255, 255, 255, 0.22),
    inset 0 0 1.29px rgba(255, 255, 255, 0.8),
    -0.62px 7.5px 10px rgba(212, 255, 0, 0.25),
    4.48px 3.62px 6.58px -2.77px rgba(255, 255, 255, 0.7);
}

.ai-text {
  color: rgba(249, 254, 255, 0.5);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>

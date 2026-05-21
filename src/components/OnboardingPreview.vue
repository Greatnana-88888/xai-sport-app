<template>
  <div class="min-h-screen bg-white relative overflow-hidden" style="max-width: 393px; margin: 0 auto;">
    <div class="absolute splash-gradient"></div>
    
    <!-- 跳过按钮 -->
    <button 
      v-if="currentPage < 4"
      @click="nextPage"
      class="absolute top-8 right-6 z-20 text-text-secondary hover:text-text-primary transition-colors"
      style="font-size: 14px; font-weight: 400;"
    >
      跳过
    </button>

    <!-- 左箭头（第2-4页显示） -->
    <button 
      v-if="currentPage > 0 && currentPage < 4"
      @click="prevPage"
      class="absolute top-8 left-6 z-20 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-all shadow-sm"
    >
      <svg class="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <!-- 页面容器 -->
    <div 
      class="relative z-10 h-full"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div 
        class="flex transition-transform duration-300 ease-out h-screen"
        :style="{ transform: `translateX(-${currentPage * 100}%)` }"
      >
        <!-- 第1页：计划优化能力 -->
        <div class="w-full flex-shrink-0 flex flex-col pt-20 pb-8 px-12">
          <div class="w-full bg-white rounded-2xl p-6 shadow-md animate-fade-in" style="box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);">
            <div class="flex flex-col items-center">
              <div 
                v-if="showOptimized" 
                class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-fade-in"
              >
                <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 
                v-if="showOptimized" 
                class="text-lg font-bold text-text-primary mb-2 animate-fade-in" 
                style="font-size: 18px;"
              >计划已优化</h3>
              <p class="text-sm text-text-secondary text-center mb-4" style="color: #646A73; line-height: 1.6; font-size: 12px;">
                明天的力量训练已自动更新为您最新的调整方案，无需手动计算。
              </p>
              <button 
                @mousedown="handleButtonPress"
                @mouseup="handleButtonRelease"
                @mouseleave="handleButtonRelease"
                @touchstart="handleButtonPress"
                @touchend="handleButtonRelease"
                :class="{ 'button-pressed': isButtonPressed }"
                class="w-full py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-150"
                style="background: linear-gradient(90deg, #D4FF00 0%, #E5FF5C 100%); box-shadow: 0 4px 16px rgba(212, 255, 0, 0.3); color: #1A1C1E; font-size: 14px;"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>一键应用调整</span>
              </button>
            </div>
          </div>
          
          <div style="margin-left: -18px; position: absolute; bottom: 176px; width: calc(100% - 96px);">
            <h2 class="text-2xl font-bold text-text-primary mb-4" style="font-size: 24px; line-height: 1.2;">采纳即更新，无感升级</h2>
            <p class="text-text-secondary" style="color: #646A73; line-height: 1.7; font-size: 12px;">
              所有AI建议均可一键采纳，运动计划立刻调整无缝衔接，不用自己再算再改。
            </p>
          </div>
        </div>

        <!-- 第2页：新手教学引导 -->
        <div class="w-full flex-shrink-0 flex flex-col pt-20 pb-8 px-12 relative">
          <div class="w-full bg-white rounded-2xl p-6 shadow-md animate-fade-in" style="box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08); margin-top: 40px;">
            <div class="flex items-start space-x-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <span class="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full" style="font-size: 10px;">新手第一课</span>
                <h3 class="text-lg font-bold text-text-primary mt-2" style="font-size: 18px;">跑前热身：唤醒关节</h3>
                <p class="text-sm text-text-secondary mt-1" style="color: #646A73; line-height: 1.5; font-size: 12px;">
                  掌握3个核心动作，让身体进入最佳运动状态，远离伤痛。
                </p>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs text-text-secondary" style="color: #646A73; font-size: 10px;">学习进度</span>
                <span class="text-xs font-medium text-primary" style="font-size: 10px;">已学习 30%</span>
              </div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full w-[30%] bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div style="margin-left: -18px; position: absolute; bottom: 176px; width: calc(100% - 96px);">
            <h2 class="text-2xl font-bold text-text-primary mb-4" style="font-size: 24px; line-height: 1.2;">从第一课开始，AI陪你升级</h2>
            <p class="text-text-secondary" style="color: #646A73; line-height: 1.7; font-size: 12px;">
              针对新手阶段，AI主动推送科学运动常识——如何热身、如何呼吸、如何避免受伤，边练边学。
            </p>
          </div>
        </div>

        <!-- 第3页：AI对话问答 -->
        <div class="w-full flex-shrink-0 flex flex-col pt-20 pb-8 px-12 relative">
          <div class="w-full pt-[100px]">
            <!-- 用户气泡 -->
            <div class="flex justify-end mb-4 animate-fade-in">
              <div class="bg-text-primary text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-xs">
                <p class="text-sm" style="line-height: 1.5; font-size: 12px;">今天大腿有点酸，还能按原计划练深蹲吗？</p>
              </div>
              <div class="w-3 h-3 rounded-full bg-gray-200 ml-2 mt-2"></div>
            </div>
            <!-- AI气泡 -->
            <div class="flex justify-start animate-fade-in" style="animation-delay: 0.2s;">
              <div class="w-3 h-3 rounded-full bg-primary mt-2 mr-2"></div>
              <div class="bg-gray-100 text-text-primary rounded-2xl rounded-tl-sm px-5 py-3 max-w-xs">
                <p class="text-sm" style="line-height: 1.5; font-size: 12px;">收到。分析了你的恢复数据，建议把深蹲重量降低20%，并增加10分钟动态拉伸，加速乳酸代谢哦。</p>
              </div>
              <div class="w-3 h-3 rounded-full bg-gray-200 ml-2 mt-2"></div>
            </div>
          </div>
          
          <div style="margin-left: -18px; position: absolute; bottom: 176px; width: calc(100% - 96px);">
            <h2 class="text-2xl font-bold text-text-primary mb-4" style="font-size: 24px; line-height: 1.2;">问它，它懂你</h2>
            <p class="text-text-secondary" style="color: #646A73; line-height: 1.7; font-size: 12px;">
              随时向AI询问身体感受："今天腿酸能跑吗？"AI将结合数据给出状态判断和计划调整建议，像随身体育医生。
            </p>
          </div>
        </div>

        <!-- 第4页：数据科学解析 -->
        <div class="w-full flex-shrink-0 flex flex-col pt-20 pb-8 px-12 relative">
          <div class="w-full bg-white rounded-2xl p-6 shadow-md animate-fade-in" style="box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08); margin-top: 40px;">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-text-primary" style="font-size: 18px;">燃脂区间分析</h3>
              </div>
              <span class="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full" style="font-size: 10px;">科学解析</span>
            </div>
            <p class="text-sm text-text-secondary mb-4" style="color: #646A73; line-height: 1.5; font-size: 12px;">
              当前心率 135 bpm 处于最佳有氧燃脂区间。维持该强度有助于加速脂肪代谢。
            </p>
            <div class="flex items-end justify-between h-12">
              <div 
                v-for="(bar, index) in bars" 
                :key="index" 
                :class="[bar.color, 'w-5 rounded-t-sm transition-all duration-500 bar-animate']"
                :style="{ height: `${bar.height}%`, animationDelay: `${index * 0.1}s` }"
              >
              </div>
            </div>
          </div>
          
          <div style="margin-left: -18px; position: absolute; bottom: 176px; width: calc(100% - 96px);">
            <h2 class="text-2xl font-bold text-text-primary mb-4" style="font-size: 24px; line-height: 1.2;">每个建议，都有科学答案</h2>
            <p class="text-text-secondary" style="color: #646A73; line-height: 1.7; font-size: 12px;">
              AI不仅告诉你"怎么做"，更解释"为什么"——从心率区间到代谢原理，帮你建立真正的运动认知。
            </p>
          </div>
        </div>

        <!-- 第5页：实时动态调整 -->
        <div class="w-full flex-shrink-0 flex flex-col pt-20 pb-8 px-12 relative">
          <div class="w-full bg-white rounded-2xl p-6 shadow-md animate-fade-in" style="box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08); margin-top: 40px;">
            <div class="flex items-start space-x-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <span class="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full" style="font-size: 10px;">实时微调建议</span>
                <h3 class="text-lg font-bold text-text-primary mt-2" style="font-size: 18px;">配速提至 5'30"</h3>
              </div>
            </div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
              <div class="h-full w-[70%] bg-primary rounded-full"></div>
            </div>
            <div class="flex justify-between text-sm" style="font-size: 12px;">
              <div>
                <span class="text-text-secondary" style="color: #646A73;">当前配速</span>
                <p class="font-bold text-text-primary">6'00"</p>
              </div>
              <div class="text-right">
                <span class="text-text-secondary" style="color: #646A73;">强度提升</span>
                <p class="font-bold text-primary">+15%</p>
              </div>
            </div>
          </div>
          
          <div style="margin-left: -18px; position: absolute; bottom: 176px; width: calc(100% - 96px);">
            <h2 class="text-2xl font-bold text-text-primary mb-4" style="font-size: 24px; line-height: 1.2;">每一步，AI都在为你调整</h2>
            <p class="text-text-secondary" style="color: #646A73; line-height: 1.7; font-size: 12px;">
              根据你当前的运动阶段和时长，AI实时给出下一阶段的训练微调建议——提速、降强度还是换动作，让计划始终贴合你此刻的状态。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <div class="absolute bottom-8 left-0 right-0 flex z-20" style="padding: 0 30px;">
      <!-- 圆点指示器 -->
      <div class="flex space-x-2 items-center">
        <div 
          v-for="(_, index) in 5" 
          :key="index"
          :class="index === currentPage ? 'w-2 h-2 bg-gray-700' : 'w-2 h-2 bg-gray-200'"
          class="rounded-full transition-all duration-300"
          :style="index === currentPage ? 'transform: scale(1.2);' : ''"
        ></div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex-1 flex justify-end">
        <!-- 第1-4页：箭头按钮 -->
        <button 
          v-if="currentPage < 4"
          @click="nextPage"
          class="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          style="background: linear-gradient(90deg, #D4FF00 0%, #E5FF5C 100%); box-shadow: 0 8px 24px rgba(212, 255, 0, 0.4);"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        
        <!-- 第5页：开启智能体验按钮 -->
        <button 
          v-else
          @click="resetPage"
          class="px-8 py-4 rounded-full font-semibold flex items-center justify-center"
          style="background: linear-gradient(90deg, #D4FF00 0%, #E5FF5C 100%); box-shadow: 0 8px 24px rgba(212, 255, 0, 0.35); color: #1A1C1E; font-size: 14px;"
        >
          重新预览
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const currentPage = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)
const showOptimized = ref(true)
const isButtonPressed = ref(false)
let intervalId = null

const bars = reactive([
  { height: 40, color: 'bg-primary' },
  { height: 55, color: 'bg-gray-700' },
  { height: 45, color: 'bg-primary' },
  { height: 70, color: 'bg-gray-700' },
  { height: 85, color: 'bg-primary' },
  { height: 60, color: 'bg-gray-700' },
  { height: 50, color: 'bg-primary' },
  { height: 75, color: 'bg-gray-700' },
  { height: 65, color: 'bg-primary' },
  { height: 55, color: 'bg-gray-700' },
  { height: 40, color: 'bg-primary' },
  { height: 60, color: 'bg-gray-700' },
])

const nextPage = () => {
  if (currentPage.value < 4) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const resetPage = () => {
  currentPage.value = 0
}

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
}

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const diff = touchStartX.value - touchEndX.value
  
  if (diff < -50 && currentPage.value > 0) {
    prevPage()
  }
  
  if (diff > 50 && currentPage.value < 4) {
    nextPage()
  }
}

const handleButtonPress = () => {
  isButtonPressed.value = true
  showOptimized.value = false
}

const handleButtonRelease = () => {
  if (isButtonPressed.value) {
    isButtonPressed.value = false
    setTimeout(() => {
      showOptimized.value = true
    }, 150)
  }
}

onMounted(() => {
  intervalId = setInterval(() => {
    if (currentPage.value === 3) {
      bars.forEach((bar, index) => {
        const baseHeight = bar.color === 'bg-primary' ? 55 + (index % 3) * 10 : 45 + ((index + 1) % 3) * 10
        const variation = Math.sin(Date.now() / 500 + index * 0.5) * 8
        bar.height = Math.max(20, Math.min(100, baseHeight + variation))
      })
    }
  }, 100)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.splash-gradient {
  width: 550px;
  height: 550px;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(
    circle,
    rgba(212, 255, 0, 0.4) 0%,
    rgba(212, 255, 0, 0.2) 30%,
    rgba(255, 255, 255, 0) 70%
  );
}

.animate-fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bar-animate {
  animation: barWave 2s ease-in-out infinite;
}

@keyframes barWave {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.1);
  }
}

.button-pressed {
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(212, 255, 0, 0.2) !important;
}
</style>
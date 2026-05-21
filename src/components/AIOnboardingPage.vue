<template>
  <div class="min-h-screen bg-bg" style="max-width: 393px; margin: 0 auto;">
    <!-- 顶部状态栏 -->
    <div class="h-10" style="background-color: #f5f7fa;"></div>

    <!-- Step 1: AI能力展示 -->
    <div v-if="currentStep === 1" class="px-4 py-8">
      <!-- 进度指示器 -->
      <div class="flex items-center justify-center mb-8">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-primary"></div>
          <div class="w-3 h-3 rounded-full bg-border"></div>
          <div class="w-3 h-3 rounded-full bg-border"></div>
        </div>
      </div>

      <!-- AI头像 -->
      <div class="flex justify-center mb-6">
        <div class="relative">
          <div class="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center" 
               style="background: linear-gradient(135deg, #D4FF00 0%, #8BC63E 100%);">
            <Bot class="w-12 h-12 text-primary-dark" />
          </div>
          <div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center">
            <Zap class="w-3.5 h-3.5 text-primary" />
          </div>
        </div>
      </div>

      <!-- 欢迎语 -->
      <div class="text-center mb-8">
        <h2 class="text-title font-semibold text-primary-dark mb-4">你好，我是 CoachAI</h2>
        <p class="text-body font-normal text-text-secondary leading-relaxed">
          我不仅会给你训练建议，<br/>
          还会通过图表、动作分析和训练解释，<br/>
          帮助你真正理解自己的运动状态。
        </p>
      </div>

      <!-- 示例卡片预览 -->
      <div class="mb-8">
        <div class="relative overflow-hidden rounded-card bg-card shadow-low">
          <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${cardIndex * 100}%)` }">
            <!-- 卡片1 -->
            <div class="w-full flex-shrink-0 p-4">
              <div class="flex items-center space-x-3 mb-3">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp class="w-5 h-5 text-primary" />
                </div>
                <span class="text-body font-medium text-primary-dark">训练负荷分析</span>
              </div>
              <div class="h-24 bg-border/50 rounded-lg relative overflow-hidden">
                <svg viewBox="0 0 300 80" class="w-full h-full">
                  <defs>
                    <linearGradient id="previewGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#D4FF00;stop-opacity:0.3" />
                      <stop offset="100%" style="stop-color:#D4FF00;stop-opacity:0" />
                    </linearGradient>
                  </defs>
                  <path d="M 20 60 Q 60 50 100 45 T 180 35 T 260 30 T 280 25" stroke="#D4FF00" stroke-width="2" fill="none" />
                  <path d="M 20 60 Q 60 50 100 45 T 180 35 T 260 30 T 280 25 L 280 80 L 20 80 Z" fill="url(#previewGradient)" />
                </svg>
              </div>
              <p class="text-tiny font-normal text-text-secondary mt-3">智能分析您的训练强度变化趋势</p>
            </div>

            <!-- 卡片2 -->
            <div class="w-full flex-shrink-0 p-4">
              <div class="flex items-center space-x-3 mb-3">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity class="w-5 h-5 text-primary" />
                </div>
                <span class="text-body font-medium text-primary-dark">生理指标监测</span>
              </div>
              <div class="flex space-x-4">
                <div class="flex-1 text-center">
                  <div class="relative w-16 h-16 mx-auto mb-2">
                    <svg class="w-full h-full transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="#E9E9EB" stroke-width="6" fill="none" />
                      <circle cx="32" cy="32" r="28" stroke="#4CAF50" stroke-width="6" fill="none" stroke-dasharray="176" stroke-dashoffset="64" />
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <span class="text-body font-bold text-primary-dark">65%</span>
                    </div>
                  </div>
                  <span class="text-tiny font-normal text-text-secondary">睡眠恢复</span>
                </div>
                <div class="flex-1 text-center">
                  <div class="relative w-16 h-16 mx-auto mb-2">
                    <svg class="w-full h-full transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="#E9E9EB" stroke-width="6" fill="none" />
                      <circle cx="32" cy="32" r="28" stroke="#FF9800" stroke-width="6" fill="none" stroke-dasharray="176" stroke-dashoffset="31" />
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <span class="text-body font-bold text-primary-dark">82%</span>
                    </div>
                  </div>
                  <span class="text-tiny font-normal text-text-secondary">身体疲劳</span>
                </div>
              </div>
            </div>

            <!-- 卡片3 -->
            <div class="w-full flex-shrink-0 p-4">
              <div class="flex items-center space-x-3 mb-3">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star class="w-5 h-5 text-primary" />
                </div>
                <span class="text-body font-medium text-primary-dark">动作分析建议</span>
              </div>
              <div class="bg-border/30 rounded-lg p-4">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User class="w-6 h-6 text-primary" />
                  </div>
                  <div class="flex-1">
                    <div class="text-body font-medium text-primary-dark mb-1">跑步姿势优化</div>
                    <p class="text-tiny font-normal text-text-secondary">调整步幅，增加步频，减少膝盖冲击</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片指示器 -->
        <div class="flex justify-center space-x-2 mt-4">
          <button v-for="i in 3" :key="i" 
                  @click="cardIndex = i - 1"
                  class="w-2 h-2 rounded-full transition-all"
                  :class="cardIndex === i - 1 ? 'bg-primary w-6' : 'bg-border'"></button>
        </div>
      </div>

      <!-- 开始体验按钮 -->
      <button @click="nextStep" 
              class="w-full py-4 rounded-card font-semibold text-primary-dark flex items-center justify-center space-x-2"
              style="background: linear-gradient(180deg, #D4FF00 0%, #E3FF52 100%); box-shadow: 0 4px 20px rgba(212, 255, 0, 0.4);">
        <span>开始体验</span>
        <ChevronRight class="w-5 h-5" />
      </button>
    </div>

    <!-- Step 2: 案例演示 -->
    <div v-if="currentStep === 2" class="px-4 py-6">
      <!-- 进度指示器 -->
      <div class="flex items-center justify-center mb-8">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-border"></div>
          <div class="w-3 h-3 rounded-full bg-primary"></div>
          <div class="w-3 h-3 rounded-full bg-border"></div>
        </div>
      </div>

      <!-- 用户问题气泡 -->
      <div class="flex justify-end mb-6">
        <div class="max-w-[80%] bg-primary-dark text-white px-5 py-4 rounded-2xl rounded-tr-sm">
          <p class="text-body font-normal">为什么我最近跑步越来越累？</p>
        </div>
      </div>

      <!-- AI回答卡片 -->
      <div class="space-y-4">
        <!-- 数据解释卡片 -->
        <div class="bg-card rounded-card shadow-low overflow-hidden">
          <div class="flex items-center justify-between p-4 border-b border-border/50">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp class="w-4 h-4 text-primary" />
              </div>
              <span class="text-body font-medium text-primary-dark">训练负荷变化</span>
            </div>
            <button @click="toggleExplain('training')" class="flex items-center space-x-1 text-tiny font-medium text-primary">
              <HelpCircle class="w-3.5 h-3.5" />
              <span>AI为什么这样判断？</span>
            </button>
          </div>
          
          <!-- 折线图 -->
          <div class="p-4">
            <div class="h-32 bg-border/30 rounded-xl relative overflow-hidden">
              <svg viewBox="0 0 320 100" class="w-full h-full">
                <!-- 网格线 -->
                <line v-for="i in 5" :key="'h'+i" x1="0" :y1="i * 20" x2="320" :y2="i * 20" stroke="#E9E9EB" stroke-width="0.5" />
                <line v-for="i in 8" :key="'v'+i" :x1="i * 40" y1="0" :x2="i * 40" y2="100" stroke="#E9E9EB" stroke-width="0.5" />
                
                <defs>
                  <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#D4FF00;stop-opacity:0.4" />
                    <stop offset="100%" style="stop-color:#D4FF00;stop-opacity:0" />
                  </linearGradient>
                </defs>
                
                <!-- 数据线 -->
                <path d="M 20 70 Q 60 65 100 60 T 180 45 T 260 35 T 300 30" 
                      stroke="#D4FF00" stroke-width="3" fill="none" 
                      stroke-linecap="round" stroke-linejoin="round"
                      style="filter: drop-shadow(0 0 4px rgba(212, 255, 0, 0.5));" />
                
                <!-- 数据点 -->
                <circle v-for="(point, i) in chartPoints" :key="i"
                        :cx="point.x" :cy="point.y" r="4" fill="#D4FF00"
                        class="data-point" :style="{ animationDelay: i * 0.2 + 's' }" />
              </svg>
              
              <!-- 阈值线 -->
              <div class="absolute top-16 left-4 right-4 h-px bg-orange-400/50"></div>
              <span class="absolute top-14 right-4 text-[10px] text-orange-500">恢复阈值</span>
            </div>
            
            <!-- 日期标签 -->
            <div class="flex justify-between mt-2 px-1">
              <span v-for="day in weekDays" :key="day" class="text-[10px] font-normal text-text-secondary">{{ day }}</span>
            </div>
          </div>
          
          <!-- AI解释 -->
          <div class="px-4 pb-4">
            <p class="text-body font-normal text-text-secondary leading-relaxed">
              你的训练强度连续4天高于恢复阈值，身体恢复时间不足，因此疲劳感明显增加。
            </p>
          </div>
          
          <!-- AI判断解释展开 -->
          <Transition name="expand">
            <div v-if="explainSections.training" class="px-4 pb-4">
              <div class="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <p class="text-tiny font-normal text-text-secondary leading-relaxed">
                  <span class="font-medium text-primary-dark">AI分析依据：</span>
                  AI结合了你的训练频率、心率波动、恢复状态进行综合分析。通过比对历史数据，发现近期训练负荷呈上升趋势，但恢复指标未同步改善，因此判断存在过度训练风险。
                </p>
              </div>
            </div>
          </Transition>
        </div>

        <!-- 生理指标分析 -->
        <div class="bg-card rounded-card shadow-low overflow-hidden">
          <div class="flex items-center justify-between p-4 border-b border-border/50">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Activity class="w-4 h-4 text-primary" />
              </div>
              <span class="text-body font-medium text-primary-dark">生理指标分析</span>
            </div>
            <button @click="toggleExplain('physiology')" class="flex items-center space-x-1 text-tiny font-medium text-primary">
              <HelpCircle class="w-3.5 h-3.5" />
              <span>AI为什么这样判断？</span>
            </button>
          </div>
          
          <div class="p-4">
            <div class="flex space-x-8 justify-center">
              <!-- 睡眠恢复 -->
              <div class="text-center">
                <div class="relative w-20 h-20 mx-auto mb-2">
                  <svg class="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="35" stroke="#E9E9EB" stroke-width="8" fill="none" />
                    <circle cx="40" cy="40" r="35" stroke="#4CAF50" stroke-width="8" fill="none" 
                            stroke-dasharray="220" stroke-dashoffset="84" />
                  </svg>
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <span class="text-title font-bold text-primary-dark">62%</span>
                  </div>
                </div>
                <span class="text-tiny font-medium text-text-secondary">睡眠恢复</span>
              </div>
              
              <!-- 身体疲劳 -->
              <div class="text-center">
                <div class="relative w-20 h-20 mx-auto mb-2">
                  <svg class="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="35" stroke="#E9E9EB" stroke-width="8" fill="none" />
                    <circle cx="40" cy="40" r="35" stroke="#FF9800" stroke-width="8" fill="none" 
                            stroke-dasharray="220" stroke-dashoffset="42" />
                  </svg>
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <span class="text-title font-bold text-primary-dark">81%</span>
                  </div>
                </div>
                <span class="text-tiny font-medium text-text-secondary">身体疲劳</span>
              </div>
            </div>
            
            <p class="text-center text-body font-normal text-text-secondary mt-4">
              睡眠恢复下降可能会影响运动耐力。
            </p>
          </div>
          
          <!-- AI判断解释展开 -->
          <Transition name="expand">
            <div v-if="explainSections.physiology" class="px-4 pb-4">
              <div class="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <p class="text-tiny font-normal text-text-secondary leading-relaxed">
                  <span class="font-medium text-primary-dark">AI分析依据：</span>
                  AI通过分析您的睡眠时长、深睡眠比例、HRV（心率变异性）等指标，综合评估身体恢复状态。当前睡眠恢复62%处于较低水平，而身体疲劳81%已接近警戒值。
                </p>
              </div>
            </div>
          </Transition>
        </div>

        <!-- 动作建议模块 -->
        <div class="bg-card rounded-card shadow-low overflow-hidden">
          <div class="flex items-center justify-between p-4 border-b border-border/50">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Star class="w-4 h-4 text-primary" />
              </div>
              <span class="text-body font-medium text-primary-dark">动作建议</span>
            </div>
            <button @click="toggleExplain('action')" class="flex items-center space-x-1 text-tiny font-medium text-primary">
              <HelpCircle class="w-3.5 h-3.5" />
              <span>AI为什么这样判断？</span>
            </button>
          </div>
          
          <div class="p-4">
            <div class="flex items-center space-x-4">
              <!-- 跑步动作插图 -->
              <div class="w-20 h-20 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                <Zap class="w-10 h-10 text-primary" />
              </div>
              
              <!-- AI建议内容 -->
              <div class="flex-1 space-y-2">
                <div class="flex items-center space-x-2">
                  <CheckCircle class="w-4 h-4 text-primary" />
                  <span class="text-body font-normal text-primary-dark">降低配速</span>
                </div>
                <div class="flex items-center space-x-2">
                  <CheckCircle class="w-4 h-4 text-primary" />
                  <span class="text-body font-normal text-primary-dark">增加恢复跑</span>
                </div>
                <div class="flex items-center space-x-2">
                  <CheckCircle class="w-4 h-4 text-primary" />
                  <span class="text-body font-normal text-primary-dark">今天建议拉伸15分钟</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- AI判断解释展开 -->
          <Transition name="expand">
            <div v-if="explainSections.action" class="px-4 pb-4">
              <div class="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <p class="text-tiny font-normal text-text-secondary leading-relaxed">
                  <span class="font-medium text-primary-dark">AI分析依据：</span>
                  AI基于您的当前疲劳状态和跑步数据，推荐降低配速以减少身体负担，增加恢复跑比例促进恢复，并建议进行针对性拉伸来缓解肌肉紧张。
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- 下一步按钮 -->
      <button @click="nextStep" 
              class="w-full py-4 mt-6 rounded-card font-semibold text-primary-dark flex items-center justify-center space-x-2 bg-card border border-border hover:bg-bg transition-colors">
        <span>了解更多</span>
        <ChevronRight class="w-5 h-5 text-text-secondary" />
      </button>
    </div>

    <!-- Step 3: 进入正式聊天 -->
    <div v-if="currentStep === 3" class="px-4 py-8">
      <!-- 进度指示器 -->
      <div class="flex items-center justify-center mb-8">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-border"></div>
          <div class="w-3 h-3 rounded-full bg-border"></div>
          <div class="w-3 h-3 rounded-full bg-primary"></div>
        </div>
      </div>

      <!-- AI头像 -->
      <div class="flex justify-center mb-6">
        <div class="relative">
          <div class="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center" 
               style="background: linear-gradient(135deg, #D4FF00 0%, #8BC63E 100%);">
            <Bot class="w-10 h-10 text-primary-dark" />
          </div>
        </div>
      </div>

      <!-- 引导文案 -->
      <div class="text-center mb-8">
        <h2 class="text-title font-semibold text-primary-dark mb-3">现在，你可以开始向 CoachAI 提问了</h2>
        <p class="text-body font-normal text-text-secondary">
          我会通过数据和图表，帮你理解运动背后的科学原理
        </p>
      </div>

      <!-- 快捷问题按钮 -->
      <div class="space-y-3 mb-8">
        <button @click="sendQuickQuestion('今天适合训练吗？')" 
                class="w-full p-4 rounded-card bg-card border border-border hover:border-primary/50 transition-colors text-left">
          <span class="text-body font-medium text-primary-dark">今天适合训练吗？</span>
        </button>
        <button @click="sendQuickQuestion('为什么我最近恢复慢？')" 
                class="w-full p-4 rounded-card bg-card border border-border hover:border-primary/50 transition-colors text-left">
          <span class="text-body font-medium text-primary-dark">为什么我最近恢复慢？</span>
        </button>
        <button @click="sendQuickQuestion('帮我分析最近运动状态')" 
                class="w-full p-4 rounded-card bg-card border border-border hover:border-primary/50 transition-colors text-left">
          <span class="text-body font-medium text-primary-dark">帮我分析最近运动状态</span>
        </button>
      </div>

      <!-- 进入聊天按钮 -->
      <button @click="enterChat" 
              class="w-full py-4 rounded-card font-semibold text-primary-dark flex items-center justify-center space-x-2"
              style="background: linear-gradient(180deg, #D4FF00 0%, #E3FF52 100%); box-shadow: 0 4px 20px rgba(212, 255, 0, 0.4);">
        <span>进入聊天</span>
        <ArrowRight class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Bot, Zap, TrendingUp, Activity, User, ChevronRight, 
  HelpCircle, CheckCircle, ArrowRight, Star 
} from 'lucide-vue-next'

const emit = defineEmits(['complete', 'chat'])

const currentStep = ref(1)
const cardIndex = ref(0)
const explainSections = ref({
  training: false,
  physiology: false,
  action: false
})

const chartPoints = [
  { x: 20, y: 70 },
  { x: 60, y: 65 },
  { x: 100, y: 60 },
  { x: 140, y: 50 },
  { x: 180, y: 45 },
  { x: 220, y: 40 },
  { x: 260, y: 35 },
  { x: 300, y: 30 }
]

const weekDays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

const toggleExplain = (section) => {
  explainSections.value[section] = !explainSections.value[section]
}

const sendQuickQuestion = (question) => {
  emit('chat', question)
}

const enterChat = () => {
  emit('complete')
}
</script>

<style scoped>
.data-point {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 100px;
}
</style>

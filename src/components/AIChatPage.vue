<template>
  <div class="min-h-screen bg-bg flex flex-col" style="max-width: 393px; margin: 0 auto;">
    <!-- 顶部状态栏 -->
    <div class="h-10" style="background-color: #f5f7fa; color: #f5f7fa;"></div>

    <!-- 顶部导航栏 -->
    <div class="px-4 py-3 flex items-center">
      <button @click="goBack" class="p-1.5">
        <Home class="w-6 h-6 text-text-secondary" />
      </button>
      <span class="flex-1 text-center text-title font-semibold text-primary-dark">CoachAI</span>
      <div class="w-10 h-10 rounded-full overflow-hidden">
        <img src="/images/coach-ai.png" alt="avatar" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- 聊天内容区域 -->
    <div class="flex-1 overflow-y-auto px-4 py-4 pb-24" ref="chatContainer">
      <div class="space-y-4">
        <!-- 消息列表 -->
        <div v-for="(message, index) in messages" :key="index">
          <!-- 用户消息 -->
          <div v-if="message.role === 'user'" class="flex justify-end">
            <div class="max-w-[80%] bg-primary-dark text-white px-5 py-4 rounded-2xl rounded-tr-sm">
              <p class="text-body font-normal">{{ message.content }}</p>
            </div>
          </div>

          <!-- AI回复 -->
          <div v-else class="flex items-start space-x-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src="/images/coachlogo-big.png" alt="CoachAI Logo" class="w-7 h-7 object-contain" />
            </div>
            <div class="flex-1">
              <div class="text-body font-medium text-primary-dark mb-1">CoachAI</div>
              <p class="text-body font-normal text-text-secondary mb-2 whitespace-pre-wrap">{{ message.content }}</p>

              <!-- 建议卡片（仅在最后一条AI回复时显示） -->
              <div v-if="index === messages.length - 1 && message.suggestions" class="space-y-3">
                <!-- 建议卡片1 -->
                <div v-if="message.suggestions[0]" class="bg-white rounded-[24px] shadow-low" style="padding: 16px; margin-left: 24px; margin-right: 24px;">
                  <div class="flex items-center mb-4">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background-color: #F8FFD4;">
                      <Circle class="w-5 h-5" style="color: #536600;" />
                    </div>
                    <div class="flex-1 mx-3">
                      <div class="text-base font-semibold text-black">{{ message.suggestions[0].title }}</div>
                      <div class="text-xs text-gray-500">{{ message.suggestions[0].subtitle }}</div>
                    </div>
                    <div class="flex items-center rounded-full px-2 py-0.5" :style="{ backgroundColor: message.suggestions[0].confidenceBg }">
                      <span class="font-medium" :style="{ fontSize: '10px', color: message.suggestions[0].confidenceColor }">{{ message.suggestions[0].confidence }}</span>
                    </div>
                  </div>
                  <div class="mb-4" style="background-color: #F8F9FA; padding: 10px; border-radius: 10px;">
                    <div class="flex items-center">
                      <Circle class="w-4 h-4 mr-3" style="color: #536600;" />
                      <span class="text-xs text-gray-600">{{ message.suggestions[0].reason }}</span>
                    </div>
                  </div>
                  <div v-if="message.suggestions[0].adjustment" class="flex items-center mb-4">
                    <div class="flex items-center">
                      <CheckCircle2 class="w-4 h-4 mr-1" style="color: #536600;" />
                      <span class="text-xs" style="color: #536600;">建议调整</span>
                    </div>
                    <span class="text-gray-300 mx-1">|</span>
                    <span class="font-medium whitespace-nowrap" style="font-size: 14px; color: #646a7c;">{{ message.suggestions[0].adjustment }}</span>
                  </div>
                  <button @click="applySuggestion(message.suggestions[0])" class="w-full flex items-center justify-center rounded-xl font-semibold" style="background-color: #D4FF00; height: 40px;">
                    <CheckCircle2 class="w-5 h-5 mr-2" style="color: #536600;" />
                    <span class="text-base text-black">应用建议</span>
                  </button>
                </div>

                <!-- 建议卡片2 -->
                <div v-if="message.suggestions[1]" class="bg-white rounded-[32px] shadow-low" style="padding: 20px 16px; margin-left: 24px; margin-right: 24px;">
                  <div class="flex items-center mb-4">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background-color: #E9E9EB;">
                      <Info class="w-5 h-5" style="color: #536600;" />
                    </div>
                    <div class="flex-1 mx-3">
                      <div class="text-base font-semibold text-black">{{ message.suggestions[1].title }}</div>
                      <div class="text-xs text-gray-500">{{ message.suggestions[1].subtitle }}</div>
                    </div>
                    <div class="flex items-center rounded-full px-2 py-0.5" :style="{ backgroundColor: message.suggestions[1].confidenceBg }">
                      <span class="font-medium" :style="{ fontSize: '10px', color: message.suggestions[1].confidenceColor }">{{ message.suggestions[1].confidence }}</span>
                    </div>
                  </div>
                  <div class="mb-4" style="background-color: #F8F9FA; padding: 10px; border-radius: 10px;">
                    <div class="flex items-center">
                      <Info class="w-4 h-4 mr-3" style="color: #536600;" />
                      <span class="text-xs text-gray-600">{{ message.suggestions[1].reason }}</span>
                    </div>
                  </div>
                  <button @click="applySuggestion(message.suggestions[1])" class="w-full flex items-center justify-center rounded-xl font-semibold" style="background-color: #D4FF00; height: 40px;">
                    <CheckCircle2 class="w-5 h-5 mr-2" style="color: #536600;" />
                    <span class="text-base text-black">应用建议</span>
                  </button>
                </div>

                <!-- 优化提示 -->
                <div class="flex items-center space-x-2" style="margin-left: 24px;">
                  <Star class="w-4 h-4 text-gray-400" />
                  <span class="text-tiny font-normal text-gray-500">优化已同步至明日训练日程</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 加载指示器 -->
        <div v-if="isLoading" class="flex items-start space-x-3">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img src="/images/coachlogo-big.png" alt="CoachAI Logo" class="w-7 h-7 object-contain" />
          </div>
          <div class="flex-1">
            <div class="text-body font-medium text-primary-dark mb-1">CoachAI</div>
            <div class="flex items-center space-x-1">
              <div class="w-2 h-2 bg-primary rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
              <div class="w-2 h-2 bg-primary rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
              <div class="w-2 h-2 bg-primary rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部输入栏 -->
    <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-bg border-t border-border/50 px-3 py-3" style="width: 393px;">
      <div class="flex items-center space-x-3" style="width: 100%;">
        <button class="p-2.5 rounded-full bg-card">
          <Circle class="w-5.5 h-5.5 text-text-secondary" />
        </button>
        <div class="flex-1 bg-card rounded-[26px] px-4 py-2.5 flex items-center">
          <input
            v-model="inputText"
            type="text"
            placeholder="输入消息..."
            class="flex-1 bg-transparent text-body text-primary-dark placeholder-text-secondary outline-none"
            @keypress.enter="sendMessage"
            :disabled="isLoading"
          />
          <button class="p-1" @click="toggleFavorite" :class="{ 'text-primary': isFavorite }">
            <Star class="w-5 h-5" :class="isFavorite ? 'text-primary' : 'text-text-secondary'" fill="currentColor" />
          </button>
        </div>
        <button @click="sendMessage" class="relative" :disabled="isLoading || !inputText.trim()">
          <div class="w-12 h-12 rounded-full ai-circle flex items-center justify-center" :class="{ 'opacity-50': !inputText.trim() }">
            <Send class="w-5 h-5 text-white" />
          </div>
        </button>
      </div>
    </div>

    <!-- 成功提示Toast -->
    <Transition name="toast">
      <div v-if="showSuccessToast" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-text-primary text-white px-6 py-3 rounded-xl shadow-lg z-50 flex items-center space-x-2">
        <CheckCircle2 class="w-5 h-5" />
        <span class="text-body font-medium">训练计划已更新</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { Check, Circle, Star, Send, Home, CheckCircle2, Info } from 'lucide-vue-next'
import { adjustTrainingPlan } from '../stores/trainingPlan'

const emit = defineEmits(['back'])

const inputText = ref('')
const isLoading = ref(false)
const isFavorite = ref(false)
const messages = ref([])
const chatContainer = ref(null)
const showSuccessToast = ref(false)

const goBack = () => {
  emit('back')
}

const applySuggestion = (suggestion) => {
  const adjustments = []
  
  if (suggestion.adjustment) {
    const match = suggestion.adjustment.match(/(\d+kg)\s*×\s*\d+\s*→\s*(\d+kg)/)
    if (match) {
      adjustments.push({
        exerciseName: suggestion.title,
        newWeight: parseInt(match[2]),
        reason: suggestion.reason
      })
    }
  }
  
  if (adjustments.length > 0) {
    adjustTrainingPlan(adjustments)
    showSuccessToast.value = true
    setTimeout(() => {
      showSuccessToast.value = false
    }, 2000)
  }
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  })
}

const generateAIResponse = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase()

  if (lowerMessage.includes('疲劳') || lowerMessage.includes('累') || lowerMessage.includes('休息')) {
    return {
      content: '收到。我分析了您的生理数据，发现您近期训练强度较高，身体需要充分恢复。综合评估后，建议对明天的计划进行以下优化：',
      suggestions: [
        {
          title: '降低深蹲重量 20%',
          subtitle: '强度调整计划',
          confidence: '置信度：极高',
          confidenceBg: '#D4FF00',
          confidenceColor: 'rgb(93, 94, 97)',
          reason: '基于您昨日 HRV (心率变异性) 下降 15%，神经系统处于疲劳恢复期。',
          adjustment: '原计划: 100kg × 5 → 80kg × 5'
        },
        {
          title: '增加 15 分钟静态拉伸',
          subtitle: '恢复增项计划',
          confidence: '置信度：高',
          confidenceBg: '#E9E9EB',
          confidenceColor: 'rgb(113, 113, 113)',
          reason: '针对您昨日反馈的腿部肌肉酸痛，有助于加速血液循环与代谢物清除。'
        }
      ]
    }
  }

  if (lowerMessage.includes('跑步')) {
    return {
      content: '了解。关于您的跑步训练，我建议根据当前的身体状态进行调整：',
      suggestions: [
        {
          title: '降低跑步配速 10%',
          subtitle: '有氧调整计划',
          confidence: '置信度：极高',
          confidenceBg: '#D4FF00',
          confidenceColor: 'rgb(93, 94, 97)',
          reason: '根据您近期的睡眠质量和心率数据，当前身体恢复程度适合中等强度训练。',
          adjustment: '原计划: 6:00/km → 6:40/km'
        }
      ]
    }
  }

  if (lowerMessage.includes('饮食') || lowerMessage.includes('营养') || lowerMessage.includes('吃')) {
    return {
      content: '好的，关于您的营养摄入，我有以下建议：',
      suggestions: [
        {
          title: '增加蛋白质摄入',
          subtitle: '营养调整计划',
          confidence: '置信度：高',
          confidenceBg: '#D4FF00',
          confidenceColor: 'rgb(93, 94, 97)',
          reason: '根据您的训练强度，建议每日蛋白质摄入量调整为 1.8g/kg 体重。'
        }
      ]
    }
  }

  if (lowerMessage.includes('睡眠') || lowerMessage.includes('睡觉')) {
    return {
      content: '睡眠对训练恢复至关重要。根据您的数据分析：',
      suggestions: [
        {
          title: '提前 30 分钟入睡',
          subtitle: '作息调整计划',
          confidence: '置信度：极高',
          confidenceBg: '#D4FF00',
          confidenceColor: 'rgb(93, 94, 97)',
          reason: '您的深睡眠比例偏低，建议提前入睡以提高睡眠质量。'
        }
      ]
    }
  }

  const defaultResponses = [
    '收到。我会综合分析您的情况，为您提供最合适的训练建议。请稍等...',
    '明白。让我分析一下您最近的训练数据和身体状态，为您制定最优方案。',
    '好的。我正在根据您提供的信息和历史数据，进行全面分析...'
  ]

  return {
    content: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
    suggestions: [
      {
        title: '降低训练强度 15%',
        subtitle: '综合调整计划',
        confidence: '置信度：高',
        confidenceBg: '#D4FF00',
        confidenceColor: 'rgb(93, 94, 97)',
        reason: '根据您近期整体训练负荷和恢复情况，适度降低强度有助于提高训练效果。'
      }
    ]
  }
}

const sendMessage = async () => {
  if (!inputText.value.trim() || isLoading.value) return

  const userMsg = inputText.value.trim()
  messages.value.push({
    role: 'user',
    content: userMsg
  })

  inputText.value = ''
  isLoading.value = true
  scrollToBottom()

  await new Promise(resolve => setTimeout(resolve, 1500))

  const response = generateAIResponse(userMsg)
  messages.value.push({
    role: 'assistant',
    content: response.content,
    suggestions: response.suggestions
  })

  isLoading.value = false
  scrollToBottom()
}

onMounted(() => {
  messages.value.push({
    role: 'assistant',
    content: '您好！我是 CoachAI，您的智能训练助手。我已分析您的近期训练数据和生理指标，可以为您提供个性化的训练建议。请问有什么可以帮您？',
    suggestions: null
  })
  
  // 检查是否有快捷问题需要发送
  const quickQuestion = localStorage.getItem('quickQuestion')
  if (quickQuestion) {
    localStorage.removeItem('quickQuestion')
    setTimeout(() => {
      inputText.value = quickQuestion
      sendMessage()
    }, 500)
  }
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.ai-circle {
  background:
    radial-gradient(ellipse 69.4px 50.9px at 25% 25%, rgba(255, 255, 255, 0.85) 0%, transparent 70%),
    radial-gradient(ellipse 15px 10.1px at 25% 25%, rgba(255, 255, 255, 1) 0%, transparent 70%),
    radial-gradient(ellipse 34.7px 25.4px at 20% 20%, rgba(255, 255, 255, 0.95) 0%, transparent 70%),
    radial-gradient(ellipse 7.5px 5px at 70% 75%, rgba(255, 255, 255, 0.7) 0%, transparent 70%),
    radial-gradient(ellipse 69.4px 50.9px at 80% 80%, rgba(255, 255, 255, 0.5) 0%, transparent 70%),
    radial-gradient(130% 130% at 92% 92%, #F8FFD4 0%, #AED100 55%, #D3FE00 100%);
  box-shadow:
    inset 6.82px 6.82px 5.8px #D4FF00,
    inset -2.05px -2.05px 3.41px rgba(255, 255, 255, 0.22),
    inset 0 0 1.03px rgba(255, 255, 255, 0.8),
    -0.5px 6px 8px rgba(212, 255, 0, 0.25),
    3.58px 2.9px 5.26px -2.22px rgba(255, 255, 255, 0.7);
  transition: opacity 0.2s;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
}
</style>

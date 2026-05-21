<template>
  <div class="min-h-screen bg-bg">
    <!-- 顶部状态栏 -->
    <div class="h-10" style="background-color: #f5f7fa;"></div>
    
    <!-- 返回按钮 -->
    <section class="pt-4 pb-2 px-4">
      <div class="max-w-iphone mx-auto">
        <button @click="goBack" class="flex items-center space-x-2 text-text-secondary">
          <ChevronLeft class="w-5 h-5" />
          <span class="text-body font-normal">返回</span>
        </button>
      </div>
    </section>

    <!-- 标题 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="text-title font-semibold text-text-primary">AI 训练计划调整</div>
        <div class="text-tiny font-normal text-text-secondary mt-1">告诉我们您的训练感受，AI将智能优化您的计划</div>
      </div>
    </section>

    <!-- 机器人形象 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="flex justify-center">
          <div class="ai-bot-image">
            <svg viewBox="0 0 100 100" class="w-full h-full">
              <circle cx="50" cy="20" r="14" fill="none" stroke="#00D4FF" stroke-width="2" opacity="0.6"/>
              <circle cx="50" cy="20" r="10" fill="none" stroke="#00D4FF" stroke-width="2" opacity="0.4"/>
              <circle cx="50" cy="20" r="6" fill="none" stroke="#00D4FF" stroke-width="2" opacity="0.3"/>
              <path d="M50 16 L50 24 M46 20 L54 20" stroke="#00D4FF" stroke-width="2" fill="none"/>
              <ellipse cx="50" cy="60" rx="30" ry="32" fill="white" stroke="#E8E8E8" stroke-width="1"/>
              <ellipse cx="50" cy="52" rx="22" ry="8" fill="#D4FF00"/>
              <ellipse cx="40" cy="58" rx="6" ry="8" fill="#00D4FF"/>
              <ellipse cx="60" cy="58" rx="6" ry="8" fill="#00D4FF"/>
              <circle cx="38" cy="56" r="2" fill="white" opacity="0.6"/>
              <circle cx="58" cy="56" r="2" fill="white" opacity="0.6"/>
              <path d="M42 68 Q50 72 58 68" stroke="#00D4FF" stroke-width="2" fill="none"/>
              <ellipse cx="22" cy="58" rx="10" ry="6" fill="white" stroke="#E8E8E8" stroke-width="1" transform="rotate(-30 22 58)"/>
              <ellipse cx="78" cy="58" rx="10" ry="6" fill="white" stroke="#E8E8E8" stroke-width="1" transform="rotate(30 78 58)"/>
              <ellipse cx="38" cy="88" rx="8" ry="10" fill="white" stroke="#E8E8E8" stroke-width="1" transform="rotate(-10 38 88)"/>
              <ellipse cx="62" cy="88" rx="8" ry="10" fill="white" stroke="#E8E8E8" stroke-width="1" transform="rotate(10 62 88)"/>
              <circle cx="28" cy="48" r="1.5" fill="#00D4FF" opacity="0.5"/>
              <circle cx="30" cy="52" r="1" fill="#00D4FF" opacity="0.3"/>
              <circle cx="25" cy="55" r="1" fill="#00D4FF" opacity="0.4"/>
              <circle cx="72" cy="48" r="1.5" fill="#00D4FF" opacity="0.5"/>
              <circle cx="70" cy="52" r="1" fill="#00D4FF" opacity="0.3"/>
              <circle cx="75" cy="55" r="1" fill="#00D4FF" opacity="0.4"/>
              <circle cx="32" cy="75" r="1" fill="#00D4FF" opacity="0.3"/>
              <circle cx="35" cy="80" r="1.5" fill="#00D4FF" opacity="0.4"/>
              <circle cx="68" cy="75" r="1" fill="#00D4FF" opacity="0.3"/>
              <circle cx="65" cy="80" r="1.5" fill="#00D4FF" opacity="0.4"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- AI消息 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="bg-card rounded-card p-4 shadow-low">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Bot class="w-4 h-4 text-text-primary" />
            </div>
            <div class="text-body font-normal text-text-secondary">
              您好！我是您的AI训练教练。请告诉我您最近的训练感受，我会根据您的反馈为您优化训练计划。
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 选项按钮 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto space-y-3">
        <button @click="selectOption('easy')" class="w-full p-4 bg-card rounded-card border border-border text-left hover:border-primary/50 transition-colors">
          <div class="text-body font-medium text-text-primary">训练感觉轻松</div>
          <div class="text-tiny font-normal text-text-secondary mt-1">可以增加强度或重量</div>
        </button>
        <button @click="selectOption('normal')" class="w-full p-4 bg-card rounded-card border border-border text-left hover:border-primary/50 transition-colors">
          <div class="text-body font-medium text-text-primary">训练强度适中</div>
          <div class="text-tiny font-normal text-text-secondary mt-1">保持当前计划继续训练</div>
        </button>
        <button @click="selectOption('hard')" class="w-full p-4 bg-card rounded-card border border-border text-left hover:border-primary/50 transition-colors">
          <div class="text-body font-medium text-text-primary">训练感觉吃力</div>
          <div class="text-tiny font-normal text-text-secondary mt-1">需要降低强度或休息</div>
        </button>
        <button @click="selectOption('injury')" class="w-full p-4 bg-card rounded-card border border-border text-left hover:border-primary/50 transition-colors">
          <div class="text-body font-medium text-text-primary">身体有不适或受伤</div>
          <div class="text-tiny font-normal text-text-secondary mt-1">需要调整计划避免受伤</div>
        </button>
      </div>
    </section>

    <!-- 自定义输入 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <textarea 
          v-model="customInput"
          placeholder="或者告诉我您的具体感受..."
          class="w-full p-4 bg-card rounded-card border border-border text-body font-normal text-text-primary placeholder-text-secondary resize-none"
          rows="3"
        ></textarea>
      </div>
    </section>

    <!-- 提交按钮 -->
    <section class="px-4 pb-24">
      <div class="max-w-iphone mx-auto">
        <button 
          @click="submitFeedback"
          class="w-full py-4 bg-primary text-text-primary font-semibold text-title rounded-card flex items-center justify-center space-x-2"
        >
          <span>提交反馈</span>
          <ChevronRight class="w-5 h-5" />
        </button>
      </div>
    </section>

    <!-- 底部导航栏 -->
    <NavBar :activeIndex="1" @navigate="handleNavigate" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronLeft, ChevronRight, Bot } from 'lucide-vue-next'
import NavBar from './NavBar.vue'

const emit = defineEmits(['navigate'])

const customInput = ref('')

const goBack = () => {
  emit('navigate', 1)
}

const selectOption = (option) => {
  console.log('Selected option:', option)
  customInput.value = getOptionText(option)
}

const getOptionText = (option) => {
  const texts = {
    easy: '训练感觉轻松，希望增加强度或重量',
    normal: '训练强度适中，保持当前计划',
    hard: '训练感觉吃力，需要降低强度',
    injury: '身体有不适，需要调整计划'
  }
  return texts[option] || ''
}

const submitFeedback = () => {
  if (!customInput.value.trim()) {
    alert('请选择一个选项或输入您的反馈')
    return
  }
  alert('感谢您的反馈！AI正在为您优化训练计划...')
  emit('navigate', 1)
}

const handleNavigate = (index) => {
  emit('navigate', index)
}
</script>

<style scoped>
.ai-bot-image {
  width: 100px;
  height: 100px;
}
</style>
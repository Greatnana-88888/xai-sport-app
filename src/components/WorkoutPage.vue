<template>
  <div class="min-h-screen bg-bg">
    <!-- 顶部状态栏 -->
    <div class="h-10" style="background-color: #f5f7fa;"></div>
    
    <!-- 用户打招呼栏 -->
    <section class="pt-4 pb-4 px-4">
      <div class="max-w-iphone mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
            <User class="w-6 h-6 text-text-primary" />
          </div>
          <div>
            <div class="text-title font-semibold text-text-primary">欢迎回来，Kate</div>
          </div>
        </div>
        <button class="p-2">
          <Settings class="w-5 h-5 text-text-secondary" />
        </button>
      </div>
    </section>

    <!-- 进度条区域 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center space-x-2">
            <span class="text-tiny font-medium text-text-secondary bg-primary/10 px-2.5 py-1 rounded-full">基础期</span>
            <span class="text-tiny font-normal text-text-secondary">第3周 / 共4周</span>
          </div>
          <span class="text-tiny font-medium text-text-primary bg-primary/10 px-2.5 py-1 rounded-full">已完成 75%</span>
        </div>
        <div class="h-2 bg-border rounded-full overflow-hidden">
          <div class="h-full flex">
            <div class="w-1/2 bg-primary rounded-full"></div>
            <div class="w-1/4 bg-primary/60 rounded-full"></div>
            <div class="w-1/4 bg-border"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 三分化训练标题 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="text-subtitle font-semibold text-text-primary">三分化训练 (增肌期)</div>
      </div>
    </section>

    <!-- AI教练建议卡片 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="bg-card rounded-card p-4 shadow-low">
          <div class="flex items-start">
            <div class="coach-ai-image">
              <img src="/images/coach-ai.png" alt="CoachAI" class="w-full h-full object-contain" />
            </div>
            <div class="flex-1">
              <div class="text-tiny font-medium text-text-secondary mb-1">CoachAI 教练建议</div>
              <p class="text-body font-normal text-text-secondary leading-relaxed ai-coach-text">
                你已经休息了5天。我已将你的训练强度调整至70%，以帮助你安全恢复。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI调整训练计划按钮 -->
    <section class="px-4 pb-6">
      <div class="max-w-iphone mx-auto">
        <button class="ai-adjust-card" @click="goToAIInteraction">
          <!-- 渐变叠加层 -->
          <div class="ai-gradient-overlay"></div>
          <!-- 内容区域 -->
          <div class="ai-card-content">
            <!-- 星标图标 -->
            <div class="ai-stars">
              <span class="star">✦</span>
              <span class="star star-2">✦</span>
              <span class="star star-3">✦</span>
            </div>
            <!-- 文字区域 -->
            <div class="ai-text">
              <div class="ai-title">AI 调整训练计划</div>
              <div class="ai-subtitle">基于您的实时反馈和护眼数据，智能优化训练课程</div>
            </div>
            <!-- 箭头图标 -->
            <ChevronRight class="ai-arrow" />
          </div>
        </button>
      </div>
    </section>

    <!-- 训练安排 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="flex items-center justify-between mb-3">
          <span class="text-subtitle font-normal text-text-primary">训练安排</span>
          <span class="text-tiny font-normal text-text-secondary">每周 3 天</span>
        </div>
        <div class="flex space-x-3">
          <div class="flex-1 bg-primary training-card">
            <div class="text-tiny font-normal text-text-primary">第一天</div>
            <div class="text-body font-normal text-text-primary">推类训练</div>
            <div class="text-tiny font-normal text-text-primary/60 training-card-desc">胸、肩、三头</div>
          </div>
          <div class="flex-1 training-card-gray">
            <div class="text-tiny font-normal text-text-secondary">第二天</div>
            <div class="text-body font-normal text-text-primary">拉类训练</div>
            <div class="text-tiny font-normal text-text-secondary training-card-desc">背部、二头</div>
          </div>
          <div class="flex-1 bg-card training-card border border-border">
            <div class="text-tiny font-normal text-text-secondary">第三天</div>
            <div class="text-body font-normal text-text-primary">腿部训练</div>
            <div class="text-tiny font-normal text-text-secondary training-card-desc">股四、腘绳、臀</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 今日动作详情 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="flex items-center space-x-2 mb-4">
          <div class="w-3 h-3 rounded-full bg-primary"></div>
          <span class="text-subtitle font-normal text-text-primary">今日动作详情 (推类)</span>
          <!-- 调整标识 -->
          <div v-if="hasAdjustments" class="ml-auto flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-full">
            <Star class="w-3 h-3 text-primary" />
            <span class="text-[10px] font-medium text-primary">已优化</span>
          </div>
        </div>
        
        <div class="space-y-3">
          <!-- 杠铃卧推 -->
          <div class="bg-card exercise-card p-4 flex items-center space-x-4 shadow-low" :class="{ 'ring-2 ring-primary/30': trainingPlan.exercises[0]?.isAdjusted }">
            <!-- 调整标识 -->
            <div v-if="trainingPlan.exercises[0]?.isAdjusted" class="adjustment-badge">
              <Star class="w-4 h-4 text-primary" />
            </div>
            <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img src="/images/bench-press.png" alt="杠铃卧推" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-body font-normal text-text-primary">杠铃卧推</div>
              <div class="text-tiny font-normal text-text-secondary">胸大肌、三角肌前束</div>
              <!-- 调整提示 -->
              <div v-if="trainingPlan.exercises[0]?.isAdjusted" class="text-[10px] font-medium text-primary mt-1 flex items-center">
                <span class="line-through text-text-secondary mr-1">{{ trainingPlan.exercises[0]?.originalWeight }}kg</span>
                → {{ trainingPlan.exercises[0]?.weight }}kg
              </div>
            </div>
            <div class="exercise-right">
              <div class="bg-[#1A1A1A] px-2 py-0.5 rounded-full flex items-end">
                <span class="text-[14px] font-bold text-primary">{{ trainingPlan.exercises[0]?.sets }}</span>
                <span class="text-[10px] font-normal text-primary ml-0.5">组</span>
              </div>
              <div class="text-[10px] font-normal text-text-secondary">{{ trainingPlan.exercises[0]?.reps }}</div>
              <div class="text-[14px] font-normal text-text-secondary">重量: {{ trainingPlan.exercises[0]?.weight }}kg</div>
            </div>
          </div>

          <!-- 哑铃推举 -->
          <div class="bg-card exercise-card p-4 flex items-center space-x-4 shadow-low" :class="{ 'ring-2 ring-primary/30': trainingPlan.exercises[1]?.isAdjusted }">
            <!-- 调整标识 -->
            <div v-if="trainingPlan.exercises[1]?.isAdjusted" class="adjustment-badge">
              <Star class="w-4 h-4 text-primary" />
            </div>
            <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=100" alt="哑铃推举" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-body font-normal text-text-primary">哑铃推举</div>
              <div class="text-tiny font-normal text-text-secondary">三角肌中束、三头肌</div>
              <!-- 调整提示 -->
              <div v-if="trainingPlan.exercises[1]?.isAdjusted" class="text-[10px] font-medium text-primary mt-1 flex items-center">
                <span class="line-through text-text-secondary mr-1">{{ trainingPlan.exercises[1]?.originalWeight }}kg</span>
                → {{ trainingPlan.exercises[1]?.weight }}kg
              </div>
            </div>
            <div class="exercise-right">
              <div class="bg-[#1A1A1A] px-2 py-0.5 rounded-full flex items-end">
                <span class="text-[14px] font-bold text-primary">{{ trainingPlan.exercises[1]?.sets }}</span>
                <span class="text-[10px] font-normal text-primary ml-0.5">组</span>
              </div>
              <div class="text-[10px] font-normal text-text-secondary">{{ trainingPlan.exercises[1]?.reps }}</div>
              <div class="text-[14px] font-normal text-text-secondary">重量: {{ trainingPlan.exercises[1]?.weight }}kg</div>
            </div>
          </div>

          <!-- 绳索下压 -->
          <div class="bg-card exercise-card p-4 flex items-center space-x-4 shadow-low" :class="{ 'ring-2 ring-primary/30': trainingPlan.exercises[2]?.isAdjusted }">
            <!-- 调整标识 -->
            <div v-if="trainingPlan.exercises[2]?.isAdjusted" class="adjustment-badge">
              <Star class="w-4 h-4 text-primary" />
            </div>
            <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=100" alt="绳索下压" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-body font-normal text-text-primary">绳索下压</div>
              <div class="text-tiny font-normal text-text-secondary">三头肌长头、外侧头</div>
              <!-- 调整提示 -->
              <div v-if="trainingPlan.exercises[2]?.isAdjusted" class="text-[10px] font-medium text-primary mt-1 flex items-center">
                <span class="line-through text-text-secondary mr-1">{{ trainingPlan.exercises[2]?.originalWeight }}kg</span>
                → {{ trainingPlan.exercises[2]?.weight }}kg
              </div>
            </div>
            <div class="exercise-right">
              <div class="bg-[#1A1A1A] px-2 py-0.5 rounded-full flex items-end">
                <span class="text-[14px] font-bold text-primary">{{ trainingPlan.exercises[2]?.sets }}</span>
                <span class="text-[10px] font-normal text-primary ml-0.5">组</span>
              </div>
              <div class="text-[10px] font-normal text-text-secondary">{{ trainingPlan.exercises[2]?.reps }}</div>
              <div class="text-[14px] font-normal text-text-secondary">重量: {{ trainingPlan.exercises[2]?.weight }}kg</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 开始今日训练按钮 -->
    <section class="px-4 pb-24">
      <div class="max-w-iphone mx-auto">
        <div class="start-training-btn-wrapper">
          <button class="start-training-btn">
            <span>开始今日训练</span>
            <ChevronRight class="w-5 h-5 text-text-primary" />
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { User, Settings, Bot, ChevronRight, Zap, Star } from 'lucide-vue-next'
import { trainingPlan } from '../stores/trainingPlan'

const emit = defineEmits(['navigate', 'go-to-ai'])

const exercises = ref([])
const hasAdjustments = computed(() => trainingPlan.hasAdjustments)

onMounted(() => {
  exercises.value = [...trainingPlan.exercises]
})

const getAdjustmentIndicator = (exercise) => {
  if (!exercise.isAdjusted) return null
  const diff = exercise.weight - exercise.originalWeight
  return diff > 0 ? `+${diff}kg` : `${diff}kg`
}

const handleNavigate = (index) => {
  emit('navigate', index)
}

const goToAIInteraction = () => {
  emit('go-to-ai')
}
</script>

<style scoped>
.ai-adjust-card {
  width: 360px;
  height: 82px;
  border-radius: 24px;
  background-color: #1A1A1A;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  padding: 0;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

.ai-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background: linear-gradient(
    90deg,
    rgba(212, 255, 0, 1) 0%,
    rgba(212, 255, 0, 0) 50%,
    rgba(212, 255, 0, 1) 100%
  );
  pointer-events: none;
  opacity: 0.6;
}

.ai-card-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-width: 0px;
  border-style: solid;
  border-color: #000000;
}

.ai-stars {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 16px;
}

.star {
  color: #D4FF00;
  font-size: 14px;
  line-height: 1;
  text-shadow: 0 0 8px rgba(212, 255, 0, 0.8);
}

.star-2 {
  font-size: 10px;
  position: relative;
  top: -2px;
  left: 6px;
  opacity: 0.8;
}

.star-3 {
  font-size: 12px;
  position: relative;
  top: -6px;
  right: 4px;
  opacity: 0.6;
}

.ai-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ai-title {
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  text-align: left;
}

.ai-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  line-height: 1.4;
  margin-top: 2px;
  text-align: left;
  font-weight: 300;
}

.ai-arrow {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.8);
  flex-shrink: 0;
}

.ai-coach-text {
  font-size: 14px;
}

.coach-ai-image {
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  margin-right: 12px;
}

.training-card {
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 14px;
  gap: 1px;
  line-height: 1.2;
}

.training-card .text-body {
  line-height: 1.2;
}

.training-card-gray {
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 14px;
  gap: 1px;
  line-height: 1.2;
  color: #F3F4F5;
  border-width: 1px;
  border-style: solid;
  border-color: #e1e3e4;
  background-color: #FFFFFF;
}

.training-card-gray .text-body {
  line-height: 1.2;
}

.training-card-desc {
  font-size: 10px;
}

.exercise-card {
  border-radius: 24px;
}

.exercise-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.start-btn {
  border-radius: 24px;
  border: none;
  cursor: pointer;
}

.start-training-btn-wrapper {
  width: 100%;
  height: 60px;
  border-radius: 30px;
  padding: 2px;
  background: linear-gradient(90deg, #FFFFFF 0%, #D4D4D4 46%, #FFFFFF 81%);
  box-shadow: 0 4px 20px rgba(212, 255, 0, 0.4);
}

.start-training-btn {
  width: 100%;
  height: 100%;
  border-radius: 28px;
  border: none;
  background: linear-gradient(180deg, #D4FF00 0%, #E3FF52 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}

.start-training-btn span {
  font-size: 16px;
  font-weight: bold;
  color: #1F2329;
}

.adjustment-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #D4FF00 0%, #AED100 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(212, 255, 0, 0.4);
  animation: pulse-adjust 2s infinite;
}

@keyframes pulse-adjust {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(212, 255, 0, 0.4);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 4px 16px rgba(212, 255, 0, 0.6);
  }
}

.exercise-card {
  position: relative;
  border-radius: 24px;
}
</style>

<template>
  <div class="min-h-screen bg-bg">
    <!-- 顶部状态栏 -->
    <div class="h-10" style="background-color: #f5f7fa;"></div>
    
    <!-- 用户信息区域 -->
    <section class="px-4 py-8">
      <div class="max-w-iphone mx-auto flex flex-col items-center">
        <!-- 头像 -->
        <div class="relative mb-4">
          <div class="w-28 h-28 rounded-full border-4 border-primary flex items-center justify-center" style="background: linear-gradient(135deg, #D4FF00 0%, #8BC63E 100%);">
            <User class="w-14 h-14 text-primary-dark" />
          </div>
          <div class="absolute -bottom-1 -right-1 bg-primary-dark text-primary text-tiny font-bold px-2 py-0.5 rounded-full">
            LV5
          </div>
        </div>
        
        <!-- 用户名 -->
        <div class="text-[24px] font-semibold text-primary-dark mb-2">Kate</div>
        
        <!-- 连续训练天数 -->
        <div class="flex items-center space-x-1 text-text-secondary">
          <Flame class="w-4 h-4 text-primary" />
          <span class="text-tiny font-normal">连续训练 82 天</span>
        </div>
      </div>
    </section>

    <!-- 用户基本信息卡片 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto bg-card rounded-card p-4 flex items-center justify-around shadow-low">
        <div class="text-center">
          <div class="text-tiny font-normal text-text-secondary mb-1">年龄</div>
          <div class="text-title font-bold text-primary-dark">25</div>
        </div>
        <div class="w-px h-10 bg-border"></div>
        <div class="text-center">
          <div class="text-tiny font-normal text-text-secondary mb-1">身高</div>
          <div class="text-title font-bold text-primary-dark">175cm</div>
        </div>
        <div class="w-px h-10 bg-border"></div>
        <div class="text-center">
          <div class="text-tiny font-normal text-text-secondary mb-1">体重</div>
          <div class="text-title font-bold text-primary-dark">70kg</div>
        </div>
      </div>
    </section>

    <!-- 当前目标卡片 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <button class="w-full bg-primary rounded-card p-4 flex items-center justify-between" style="box-shadow: 0 4px 16px rgba(212, 255, 0, 0.3);">
          <div class="flex items-center space-x-3">
            <Target class="w-5 h-5 text-primary-dark" />
            <span class="text-body font-semibold text-primary-dark">增肌 + 塑形</span>
          </div>
          <ChevronRight class="w-5 h-5 text-primary-dark" />
        </button>
      </div>
    </section>

    <!-- 设备管理 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="text-body font-semibold text-primary-dark mb-3">设备管理</div>
        <div class="bg-card rounded-card pl-6 pr-6 pt-5 pb-5 shadow-low">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-lg bg-text-secondary/10 flex items-center justify-center">
                <Watch class="w-5 h-5 text-text-secondary" />
              </div>
              <div>
                <div class="text-body font-medium text-primary-dark">运动护腕</div>
                <div class="flex items-center space-x-1">
                  <span class="w-2 h-2 rounded-full bg-green-500"></span>
                  <span class="text-tiny font-normal text-text-secondary">Connected</span>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-tiny font-medium text-text-secondary">详情</span>
              <ChevronRight class="w-4 h-4 text-text-secondary" />
            </div>
          </div>
          <div class="relative">
            <div class="text-tiny font-normal text-text-secondary mb-1">电量</div>
            <div class="h-2 bg-border rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full" style="width: 85%;"></div>
            </div>
            <div class="absolute right-0 top-0">
              <span class="text-tiny font-medium text-text-secondary">85%</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 设置列表 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto bg-card rounded-card shadow-low overflow-hidden">
        <!-- AI设置 -->
        <div class="p-4">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot class="w-5 h-5 text-primary" />
              </div>
              <span class="text-body font-medium text-primary-dark">AI 设置</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-tiny font-medium text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">专业</span>
              <ChevronRight class="w-5 h-5 text-text-secondary" />
            </div>
          </div>
          <!-- 详细程度进度条 -->
          <div class="mb-2">
            <div class="flex items-center justify-between mb-2">
              <span class="text-tiny font-normal text-text-secondary">详细程度</span>
            </div>
            <div ref="progressBarRef" class="relative h-2 bg-border rounded-full overflow-hidden cursor-pointer progress-bar-container" 
                 @mousedown="startDrag" 
                 @touchstart.prevent="startDrag">
              <div class="h-full bg-primary rounded-full transition-all duration-100" 
                   :style="{ width: aiProgress + '%' }"></div>
              <div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-md cursor-grab active:cursor-grabbing transition-all duration-100" 
                   :style="{ left: 'calc(' + aiProgress + '% - 8px)' }"
                   @mousedown.stop="startDrag"
                   @touchstart.stop.prevent="startDrag"></div>
            </div>
            <div class="flex items-center justify-between mt-2">
              <span class="text-tiny font-normal text-text-secondary">简易</span>
              <span class="text-tiny font-medium text-primary-dark">专业</span>
            </div>
          </div>
        </div>
        
        <div class="h-px bg-border/50"></div>
        
        <!-- 详细设置 -->
        <button class="w-full p-4 flex items-center justify-between hover:bg-bg/50 transition-colors">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Settings class="w-5 h-5 text-primary" />
            </div>
            <span class="text-body font-medium text-primary-dark">详细设置</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-tiny font-medium text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">专业</span>
            <ChevronRight class="w-5 h-5 text-text-secondary" />
          </div>
        </button>
        
        <div class="h-px bg-border/50"></div>
        
        <!-- 隐私 -->
        <button class="w-full p-4 flex items-center justify-between hover:bg-bg/50 transition-colors">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield class="w-5 h-5 text-primary" />
            </div>
            <span class="text-body font-medium text-primary-dark">隐私</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-tiny font-medium text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">专业</span>
            <ChevronRight class="w-5 h-5 text-text-secondary" />
          </div>
        </button>
        
        <div class="h-px bg-border/50"></div>
        
        <!-- 通知设置 -->
        <button class="w-full p-4 flex items-center justify-between hover:bg-bg/50 transition-colors">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-text-secondary/10 flex items-center justify-center">
              <Bell class="w-5 h-5 text-text-secondary" />
            </div>
            <span class="text-body font-medium text-primary-dark">通知设置</span>
          </div>
          <ChevronRight class="w-5 h-5 text-text-secondary" />
        </button>
        
        <div class="h-px bg-border/50"></div>
        
        <!-- 隐私政策 -->
        <button class="w-full p-4 flex items-center justify-between hover:bg-bg/50 transition-colors">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-text-secondary/10 flex items-center justify-center">
              <FileText class="w-5 h-5 text-text-secondary" />
            </div>
            <span class="text-body font-medium text-primary-dark">隐私政策</span>
          </div>
          <ChevronRight class="w-5 h-5 text-text-secondary" />
        </button>
        
        <div class="h-px bg-border/50"></div>
        
        <!-- 帮助与反馈 -->
        <button class="w-full p-4 flex items-center justify-between hover:bg-bg/50 transition-colors">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-text-secondary/10 flex items-center justify-center">
              <HelpCircle class="w-5 h-5 text-text-secondary" />
            </div>
            <span class="text-body font-medium text-primary-dark">帮助与反馈</span>
          </div>
          <ChevronRight class="w-5 h-5 text-text-secondary" />
        </button>
        
        <div class="h-px bg-border/50"></div>
        
        <!-- 关于我们 -->
        <button class="w-full p-4 flex items-center justify-between hover:bg-bg/50 transition-colors">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-text-secondary/10 flex items-center justify-center">
              <Info class="w-5 h-5 text-text-secondary" />
            </div>
            <span class="text-body font-medium text-primary-dark">关于我们</span>
          </div>
          <ChevronRight class="w-5 h-5 text-text-secondary" />
        </button>
      </div>
    </section>

    <!-- 退出登录 -->
    <section class="px-4 pb-24">
      <div class="max-w-iphone mx-auto">
        <button class="w-full text-red-500 text-body font-medium py-4">
          退出登录
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Flame, Target, ChevronRight, Watch, Bot, Settings, Shield, Bell, FileText, HelpCircle, Info } from 'lucide-vue-next'

const aiProgress = ref(50)
const isDragging = ref(false)
const progressBarRef = ref(null)

const updateProgress = (event) => {
  if (!progressBarRef.value) return
  
  const rect = progressBarRef.value.getBoundingClientRect()
  const clientX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX
  const x = clientX - rect.left
  let progress = (x / rect.width) * 100
  progress = Math.max(0, Math.min(100, progress))
  aiProgress.value = Math.round(progress)
}

const startDrag = (event) => {
  isDragging.value = true
  updateProgress(event)
  
  const handleMouseMove = (e) => {
    if (isDragging.value) {
      updateProgress(e)
    }
  }
  
  const handleMouseUp = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('touchmove', handleMouseMove)
    document.removeEventListener('touchend', handleMouseUp)
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  document.addEventListener('touchmove', handleMouseMove)
  document.addEventListener('touchend', handleMouseUp)
}
</script>

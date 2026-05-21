<template>
  <div class="min-h-screen bg-bg">
    <!-- 顶部状态栏 -->
    <div class="h-10" style="background-color: #f5f7fa;"></div>
    
    <!-- 用户打招呼栏 -->
    <section class="pt-4 pb-4 px-4">
      <div class="max-w-iphone mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
            <User class="w-6 h-6 text-primary-dark" />
          </div>
          <div>
            <div class="text-title font-semibold text-primary-dark">欢迎回来，Kate</div>
            <div class="text-tiny font-normal text-primary px-2 py-1 bg-primary/10 rounded-full w-fit">动态状态: 巅峰</div>
          </div>
        </div>
        <button class="p-2">
          <Settings class="w-5 h-5 text-text-secondary" />
        </button>
      </div>
    </section>

    <!-- 核心指标卡片 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="bg-card rounded-card p-5 shadow-low">
          <div class="flex items-center justify-between mb-4">
            <span class="text-body font-normal text-text-secondary">核心指标</span>
          </div>
          <div class="flex items-end justify-between mb-4">
            <div>
              <div class="text-body font-semibold text-text-secondary">肌肉量</div>
              <div class="text-[52px] font-bold text-primary-dark">68.4<span class="text-subtitle font-semibold">%</span></div>
            </div>
            <div class="text-right">
              <div class="flex items-center space-x-1 text-primary">
                <TrendingUp class="w-4 h-4" />
                <span class="text-tiny font-medium">+2.4%</span>
              </div>
              <div class="text-tiny font-normal text-text-secondary">对比上个月</div>
            </div>
          </div>
          <!-- 折线图 -->
          <div class="relative">
            <svg viewBox="0 0 320 70" class="w-full h-20">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#D4FF00;stop-opacity:0.3" />
                  <stop offset="100%" style="stop-color:#D4FF00;stop-opacity:0" />
                </linearGradient>
              </defs>
              <path d="M 20 50 Q 60 45 100 40 T 180 30 T 260 20 T 300 25" stroke="#D4FF00" stroke-width="3" fill="none" />
              <path d="M 20 50 Q 60 45 100 40 T 180 30 T 260 20 T 300 25 L 300 70 L 20 70 Z" fill="url(#chartGradient)" />
            </svg>
            <div class="flex justify-between text-tiny font-normal text-text-secondary mt-1 px-1">
              <span>第1天</span>
              <span>第15天</span>
              <span>今天</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据卡片 - 第一行 -->
    <section class="px-4 pb-3">
      <div class="max-w-iphone mx-auto">
        <div class="bg-card rounded-card flex items-center" style="height: 80px; padding: 0 16px;">
          <!-- 体脂率 -->
          <div class="flex-1 flex flex-col justify-center px-2">
            <div class="text-text-secondary text-tiny font-normal mb-1">体脂率</div>
            <div class="flex items-center">
              <span class="font-bold" style="font-size: 20px; color: #1A2B48;">25.2%</span>
              <svg class="ml-2 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16">
                <defs>
                  <linearGradient id="downGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFD93D" />
                    <stop offset="100%" style="stop-color:#FF6B35" />
                  </linearGradient>
                </defs>
                <path d="M8 2 L8 10 M3 10 L8 14 L13 10" fill="url(#downGradient1)" stroke="url(#downGradient1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <!-- 分隔线 -->
          <div class="w-px h-12 bg-border/40 flex-shrink-0"></div>
          <!-- 肌肉率 -->
          <div class="flex-1 flex flex-col justify-center px-2">
            <div class="text-text-secondary text-tiny font-normal mb-1">肌肉率</div>
            <div class="flex items-center">
              <span class="font-bold" style="font-size: 20px; color: #1A2B48;">59.1%</span>
              <svg class="ml-2 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16">
                <defs>
                  <linearGradient id="upGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" style="stop-color:#85E085" />
                    <stop offset="100%" style="stop-color:#35D4A8" />
                  </linearGradient>
                </defs>
                <path d="M8 14 L8 6 M3 6 L8 2 L13 6" fill="url(#upGradient1)" stroke="url(#upGradient1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <!-- 分隔线 -->
          <div class="w-px h-12 bg-border/40 flex-shrink-0"></div>
          <!-- BMI指数 -->
          <div class="flex-1 flex flex-col justify-center px-2">
            <div class="text-text-secondary text-tiny font-normal mb-1">BMI指数</div>
            <div class="flex items-center">
              <span class="font-bold" style="font-size: 20px; color: #1A2B48;">22.2%</span>
              <svg class="ml-2 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16">
                <defs>
                  <linearGradient id="downGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFD93D" />
                    <stop offset="100%" style="stop-color:#FF6B35" />
                  </linearGradient>
                </defs>
                <path d="M8 2 L8 10 M3 10 L8 14 L13 10" fill="url(#downGradient2)" stroke="url(#downGradient2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据卡片 - 第二行 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="bg-card rounded-card flex items-center" style="height: 80px; padding: 0 16px;">
          <!-- 体脂肪 -->
          <div class="flex-1 flex flex-col justify-center px-2">
            <div class="text-text-secondary text-tiny font-normal mb-1">体脂肪</div>
            <div class="flex items-center">
              <span class="font-bold" style="font-size: 20px; color: #1A2B48;">23kg</span>
              <svg class="ml-2 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16">
                <defs>
                  <linearGradient id="downGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFD93D" />
                    <stop offset="100%" style="stop-color:#FF6B35" />
                  </linearGradient>
                </defs>
                <path d="M8 2 L8 10 M3 10 L8 14 L13 10" fill="url(#downGradient3)" stroke="url(#downGradient3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <!-- 分隔线 -->
          <div class="w-px h-12 bg-border/40 flex-shrink-0"></div>
          <!-- 肌肉量 -->
          <div class="flex-1 flex flex-col justify-center px-2">
            <div class="text-text-secondary text-tiny font-normal mb-1">肌肉量</div>
            <div class="flex items-center">
              <span class="font-bold" style="font-size: 20px; color: #1A2B48;">37.4kg</span>
              <svg class="ml-2 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16">
                <defs>
                  <linearGradient id="upGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" style="stop-color:#85E085" />
                    <stop offset="100%" style="stop-color:#35D4A8" />
                  </linearGradient>
                </defs>
                <path d="M8 14 L8 6 M3 6 L8 2 L13 6" fill="url(#upGradient2)" stroke="url(#upGradient2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <!-- 分隔线 -->
          <div class="w-px h-12 bg-border/40 flex-shrink-0"></div>
          <!-- 体重 -->
          <div class="flex-1 flex flex-col justify-center px-2">
            <div class="text-text-secondary text-tiny font-normal mb-1">体重</div>
            <div class="flex items-center">
              <span class="font-bold" style="font-size: 20px; color: #1A2B48;">63.2kg</span>
              <svg class="ml-2 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16">
                <defs>
                  <linearGradient id="downGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFD93D" />
                    <stop offset="100%" style="stop-color:#FF6B35" />
                  </linearGradient>
                </defs>
                <path d="M8 2 L8 10 M3 10 L8 14 L13 10" fill="url(#downGradient4)" stroke="url(#downGradient4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 最近洞察 -->
    <section class="px-4 pb-4">
      <div class="max-w-iphone mx-auto">
        <div class="text-body font-semibold text-primary-dark mb-3">最近洞察</div>
        
        <!-- 训练认知提升 -->
        <div class="bg-card rounded-card p-4 mb-3 flex items-center space-x-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Lightbulb class="w-6 h-6 text-primary" />
          </div>
          <div class="flex-1">
            <div class="text-body font-semibold text-primary-dark">训练认知提升</div>
            <div class="text-tiny font-normal text-text-secondary">晨间有氧期间神经专注力达到巅峰</div>
          </div>
          <ChevronRight class="w-5 h-5 text-text-secondary flex-shrink-0" />
        </div>

        <!-- 恢复速度+12% -->
        <div class="bg-card rounded-card p-4 mb-4 flex items-center space-x-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Zap class="w-6 h-6 text-primary" />
          </div>
          <div class="flex-1">
            <div class="flex items-center space-x-2">
              <span class="text-body font-semibold text-primary-dark">恢复速度</span>
              <span class="text-tiny font-medium text-green-500">+12%</span>
            </div>
            <div class="text-tiny font-normal text-text-secondary">睡眠质量提升了心率变异性</div>
          </div>
          <ChevronRight class="w-5 h-5 text-text-secondary flex-shrink-0" />
        </div>
      </div>
    </section>

    <!-- 表现档案按钮 -->
    <section class="px-4 pb-24">
      <div class="max-w-iphone mx-auto">
        <button class="performance-btn w-full">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-body font-semibold text-white">表现档案</div>
              <div class="text-tiny font-normal text-white/70">详细周/月报表</div>
            </div>
            <ChevronRight class="w-5 h-5 text-white" />
          </div>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { User, Settings, Lightbulb, Zap, ChevronRight } from 'lucide-vue-next'
</script>

<style scoped>
.performance-btn {
  height: 88px;
  border-radius: 24px;
  padding: 20px;
  border: none;
  cursor: pointer;
  background: linear-gradient(180deg, #8BC63E 0%, #0D3D14 100%);
  box-shadow: 
    0 4px 20px rgba(139, 198, 62, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.performance-btn:active {
  transform: scale(0.98);
}
</style>
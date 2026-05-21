<template>
  <div class="min-h-screen bg-bg">
    <!-- 顶部状态栏 -->
    <div class="h-10" style="background-color: #f5f7fa; color: #f5f7fa;"></div>
    
    <!-- 用户打招呼栏 -->
    <section class="pt-4 pb-4 px-4">
      <div class="max-w-iphone mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center" style="background: linear-gradient(135deg, rgba(212, 255, 0, 0.15) 0%, rgba(212, 255, 0, 0.05) 100%);">
            <Headphones class="w-6 h-6 text-primary" />
          </div>
          <div>
            <div class="text-title font-semibold" style="letter-spacing: -0.5px; color: #1A1C1E; font-size: 24px; width: 160px;">早上好，Kate</div>
            <div class="text-tiny font-normal rounded-full w-fit mt-1 text-center" style="background-color: rgba(212, 255, 0, 0.2); padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; font-size: 11px; color: #536600;">力量塑形-强化期</div>
          </div>
        </div>
        <div class="flex items-center space-x-2" style="margin-left: 20px; margin-right: 5px;">
          <div class="flex items-center space-x-1 bg-text-secondary/10 rounded-full whitespace-nowrap" style="padding-left: 8px; padding-right: 8px; padding-top: 4px; padding-bottom: 4px; transform: translateX(8px);">
            <Watch class="w-3 h-3" style="color: #646A73;" />
            <span class="text-tiny font-normal text-text-secondary" style="font-size: 10px;">已连接 92%</span>
          </div>
          <button class="p-1.5 -ml-2">
            <Bell class="w-5 h-5 text-text-secondary" />
          </button>
        </div>
      </div>
    </section>

    <!-- 英雄区 -->
    <section class="pb-8 px-4">
      <div class="max-w-iphone mx-auto">
        <div class="hero-card rounded-2xl p-6 text-white mb-6 relative overflow-hidden">
          <div class="absolute inset-0 bg-[#A4A7AB]"></div>
          <div class="absolute inset-0" style="background: radial-gradient(143.84% 97.24% at 15.05% 91.56%, rgba(255, 255, 255, 0.00) 0%, rgba(59, 59, 59, 0.54) 65.87%, rgba(0, 0, 0, 0.70) 100%), radial-gradient(189.98% 136.93% at -2.13% 115.43%, rgba(212, 255, 0, 0.48) 5.1%, rgba(217, 255, 28, 0.52) 21.24%, rgba(93, 106, 33, 0.57) 55.81%, rgba(46, 46, 46, 0.60) 80.29%, rgba(0, 0, 0, 0.60) 100%); box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.80) inset, 0 0 20px 0 rgba(255, 255, 255, 0.80) inset; backdrop-filter: blur(5px);"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="text-small font-normal text-white/70 mb-1">今日目标</div>
                <div class="text-heading font-semibold">运动 30 分钟</div>
              </div>
              <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Activity class="w-8 h-8 text-primary" />
              </div>
            </div>
            <div class="relative h-24 mb-4">
              <svg viewBox="0 0 300 80" class="w-full h-full">
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#D4FF00;stop-opacity:0.5" />
                    <stop offset="100%" style="stop-color:#D4FF00;stop-opacity:0" />
                  </linearGradient>
                </defs>
                <path d="M 0 60 Q 50 50 100 40 T 200 30 T 300 20" stroke="#D4FF00" stroke-width="3" fill="none" />
                <path d="M 0 60 Q 50 50 100 40 T 200 30 T 300 20 L 300 80 L 0 80 Z" fill="url(#heroGradient)" />
              </svg>
            </div>
            <div class="flex justify-between text-tiny font-normal">
              <span>08:00</span>
              <span>12:00</span>
              <span>16:00</span>
              <span>20:00</span>
            </div>
          </div>
        </div>

        <!-- 三分化训练 -->
        <div class="bg-card rounded-card p-5 mb-6 shadow-low">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-2">
              <span class="text-subtitle font-semibold" style="color: #1A1C1E;">三分化训练</span>
              <span class="text-tiny font-medium bg-primary/10 px-2.5 py-1 rounded-full" style="color: #536600;">推日(Day 1)</span>
            </div>
            <button class="flex items-center space-x-1 p-1">
              <span class="w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
            </button>
          </div>
          <div class="mb-3">
            <div class="text-body font-normal text-text-secondary">上次训练：3月30日 · 腿部训练</div>
          </div>
          <div class="flex items-start space-x-2 mb-4">
            <AlertTriangle class="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
            <span class="text-tiny font-normal text-warning">间隔较久，建议从原强度的70%开始恢复</span>
          </div>
          <div class="flex items-center" style="color: #536600;">
            <span class="text-body font-medium" style="color: #536600;">查看计划详情</span>
            <ChevronRight class="w-5 h-5 ml-1" style="color: #536600;" />
          </div>
        </div>

        <!-- 定制新计划 & 开始训练 -->
        <div class="grid grid-cols-2 gap-3 mb-6">
          <div class="bg-card rounded-card p-4">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center space-x-2">
                <Star class="w-5 h-5 text-primary" />
                <span class="text-body font-medium" style="color: #1A1C1E;">定制新计划</span>
              </div>
              <ChevronRight class="w-4 h-4 text-text-secondary" />
            </div>
            <p class="text-tiny font-normal text-text-secondary mb-4">智能AI生成专属训练方案</p>
            <button class="w-full py-2.5 rounded-button font-medium" @click="goToAIChat" style="background: linear-gradient(90deg, #D4FF00 0%, #E5FF5C 100%); box-shadow: 0 0 20px 0 rgba(212, 255, 0, 0.40); color: #1A1C1E;">
              立即调整 →
            </button>
          </div>
          <div class="bg-primary-dark rounded-card p-4 relative overflow-hidden">
            <div class="absolute inset-0 opacity-30">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=200" alt="训练背景" class="w-full h-full object-cover" />
            </div>
            <div class="relative z-10 flex flex-col items-center justify-center h-full">
              <button class="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-3">
                <Play class="w-7 h-7 text-primary-dark" />
              </button>
              <span class="text-title font-semibold text-white">开始训练</span>
            </div>
          </div>
        </div>

        <!-- AI动态建议 -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-subtitle font-semibold" style="color: #1A1C1E;">AI 动态建议</span>
            <span class="text-tiny font-normal text-primary-dark bg-primary/10 px-2 py-1 rounded-full">LIVE UPDATE</span>
          </div>
          <div class="space-y-3">
            <div class="bg-card rounded-feature p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-body font-normal text-primary-dark">今日降低强度，增加拉伸</span>
                <span class="text-tiny font-normal text-primary-dark bg-primary px-2 py-1 rounded-full">置信度高</span>
              </div>
              <div class="flex items-center" style="color: #536600;">
                <span class="text-tiny font-normal" style="color: #536600;">查看依据</span>
                <Info class="w-3 h-3 ml-1" style="color: #536600;" />
              </div>
            </div>
            <div class="bg-card rounded-feature p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-body font-normal text-primary-dark">建议补充 300ml 电解质水</span>
                <span class="text-tiny font-normal text-text-secondary bg-border px-2 py-1 rounded-full">置信度中</span>
              </div>
              <div class="flex items-center" style="color: #536600;">
                <span class="text-tiny font-normal" style="color: #536600;">查看依据</span>
                <Info class="w-3 h-3 ml-1" style="color: #536600;" />
              </div>
            </div>
          </div>
        </div>

        <!-- 运动挑战 -->
        <div class="bg-gradient-to-br from-primary to-primary-purple rounded-card p-4 mb-6">
          <div class="flex items-center justify-between mb-3">
            <div>
              <div class="text-body font-semibold" style="color: #1A1C1E;">7天运动挑战</div>
              <div class="text-tiny font-normal text-primary-dark/70">已完成 3/7 天</div>
            </div>
            <div class="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
              <Award class="w-5 h-5 text-primary-dark" />
            </div>
          </div>
          <div class="flex space-x-2">
            <div v-for="day in 7" :key="day" 
                 :class="[day <= 3 ? 'bg-primary-dark' : 'bg-white/30']" 
                 class="flex-1 h-2 rounded-full"></div>
          </div>
        </div>

        <!-- 好友动态 -->
        <div class="mb-24">
          <div class="flex items-center justify-between mb-4">
            <span class="text-subtitle font-semibold text-primary-dark">好友动态</span>
            <span class="text-small font-normal text-info">查看全部</span>
          </div>
          <div class="space-y-4">
            <div v-for="(post, index) in friendPosts" :key="index" class="bg-card rounded-card p-4 shadow-low">
              <div class="flex items-start space-x-3">
                <div class="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User class="w-5 h-5 text-primary" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center space-x-2 mb-1">
                    <span class="text-body font-medium text-primary-dark">{{ post.name }}</span>
                    <span class="text-tiny font-normal text-text-secondary">{{ post.time }}</span>
                  </div>
                  <p class="text-body font-normal text-text-secondary leading-relaxed mb-3">{{ post.content }}</p>
                  <div class="flex items-center space-x-4 pt-2 border-t border-border/50">
                    <button class="flex items-center space-x-1.5 text-tiny font-normal text-text-secondary hover:text-primary transition-colors">
                      <Heart class="w-4 h-4" />
                      <span>{{ post.likes }}</span>
                    </button>
                    <button class="flex items-center space-x-1.5 text-tiny font-normal text-text-secondary hover:text-primary transition-colors">
                      <MessageCircle class="w-4 h-4" />
                      <span>{{ post.comments }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Zap, Search, Bell, Activity, Bot, Send, Play, Award, User, Heart, MessageCircle,
  Home, Target, Settings, ArrowUpRight, Star, Bike, Music, Circle, ChevronRight, AlertTriangle, Info,
  Headphones, BatteryCharging, Watch
} from 'lucide-vue-next'

const emit = defineEmits(['go-to-ai'])

const goToAIChat = () => {
  emit('go-to-ai')
}

const friendPosts = [
  { name: '小明', time: '2小时前', content: '完成了今天的跑步目标，感觉很棒！💪', likes: 12, comments: 3 },
  { name: '小红', time: '5小时前', content: '跟着AI教练做了瑜伽，放松身心~', likes: 8, comments: 5 }
]
</script>

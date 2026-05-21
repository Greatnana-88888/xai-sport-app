<template>
  <nav class="fixed bottom-[5px] left-1/2 transform -translate-x-1/2 z-50 flex items-center">
    <!-- 白色矩形卡片 -->
    <div 
      class="w-[284px] h-[70px] rounded-[42px] bg-white flex items-center relative overflow-hidden"
      :style="{
        boxShadow: '0 0 6px rgba(212, 255, 0, 0.25)'
      }"
    >
      <!-- 绿色滑块 -->
      <div 
        class="absolute h-[58px] w-[100px] rounded-[29px] flex items-center justify-between px-4 transition-all duration-300"
        :style="{
          backgroundColor: '#E3FF52',
          boxShadow: 'inset 0 0 4px rgba(0, 0, 0, 0.25)',
          left: sliderLeft,
          top: '6px'
        }"
      >
        <component :is="navItems[activeIndex].icon" class="w-6 h-6 text-primary-dark" />
        <span class="text-body font-medium text-primary-dark">{{ navItems[activeIndex].label }}</span>
      </div>

      <!-- 导航图标容器 - 使用绝对定位放置图标，避开绿色卡片区域 -->
      <div class="absolute inset-0 flex items-center">
        <button
          v-for="(item, index) in navItems"
          :key="index"
          @click="emit('update:activeIndex', index)"
          class="h-[58px] flex items-center justify-center transition-all duration-300"
          :style="getButtonStyle(index)"
        >
          <component 
            v-if="activeIndex !== index" 
            :is="item.icon" 
            class="w-6 h-6 text-text-secondary" 
          />
        </button>
      </div>
    </div>

    <!-- AI圆形图标 -->
    <button @click="handleAIClick" class="ml-3 relative">
      <div 
        class="w-[64px] h-[64px] rounded-full flex items-center justify-center ai-circle"
      >
        <span 
          class="text-xl font-bold ai-text"
        >
          AI
        </span>
      </div>
    </button>
  </nav>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { Home, Target, Activity, User } from 'lucide-vue-next'

const props = defineProps({
  activeIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:activeIndex', 'ai-click'])

const handleAIClick = () => {
  emit('ai-click')
}

const navItems = [
  { icon: Home, label: '首页' },
  { icon: Target, label: '锻炼' },
  { icon: Activity, label: '数据' },
  { icon: User, label: '个人' }
]

// 滑块位置
const sliderLeft = computed(() => {
  const positions = ['6px', '61.33px', '122.67px', '178px']
  return positions[props.activeIndex]
})

// 按钮样式 - 根据激活位置计算每个按钮的位置和宽度
const getButtonStyle = (index) => {
  const active = props.activeIndex
  const styles = []
  
  // 定义每个激活状态下各按钮的位置（left）和宽度
  const buttonConfigs = {
    // 首页激活: 绿色卡片在最左边(6px-106px)
    // 剩余空间: 284 - 6 - 100 = 178px
    // 三个图标(锻炼、数据、个人)各58px = 174px
    // 剩余4px分成4个间隔，每个间隔1px
    0: [
      { left: '6px', width: '58px', opacity: 0 },    // 首页 - 被绿色卡片覆盖
      { left: '108px', width: '58px' },              // 锻炼（绿色卡片右边缘+2px）
      { left: '172px', width: '58px' },              // 数据（间隔64px）
      { left: '228px', width: '50px' }               // 个人（间隔56px，距右边缘6px）
    ],
    // 锻炼激活: 绿色卡片在中间偏左(61.33px-161.33px)
    1: [
      { left: '6px', width: '58px' },                // 首页（距左边缘6px）
      { left: '61.33px', width: '58px', opacity: 0 }, // 锻炼 - 被绿色卡片覆盖
      { left: '167.33px', width: '58px' },           // 数据（绿色卡片右边缘+6px）
      { left: '231.33px', width: '46.67px' }         // 个人（间隔64px，距右边缘6px）
    ],
    // 数据激活: 绿色卡片在中间偏右(122.67px-222.67px)
    2: [
      { left: '6px', width: '58px' },                // 首页（距左边缘6px）
      { left: '70px', width: '58px' },               // 锻炼（间隔64px）
      { left: '122.67px', width: '58px', opacity: 0 }, // 数据 - 被绿色卡片覆盖
      { left: '228.67px', width: '49.33px' }         // 个人（绿色卡片右边缘+6px，距右边缘6px）
    ],
    // 个人激活: 绿色卡片在最右边(178px-278px)
    // 三个图标(首页、锻炼、数据)均匀分布在左侧空间
    3: [
      { left: '6px', width: '58px' },                // 首页（距左边缘6px）
      { left: '66px', width: '58px' },               // 锻炼（间隔60px）
      { left: '120px', width: '58px' },              // 数据（间隔54px，距绿色卡片左边缘58px）
      { left: '178px', width: '58px', opacity: 0 }   // 个人 - 被绿色卡片覆盖
    ]
  }
  
  const config = buttonConfigs[active][index]
  return {
    position: 'absolute',
    left: config.left,
    width: config.width,
    opacity: config.opacity || 1
  }
}
</script>

<style scoped>
.ai-circle {
  background: 
    /* 左上第一个高光（半透明大高光）- 面积四倍，透明度85% */
    radial-gradient(ellipse 86.8px 63.6px at 25% 25%, rgba(255, 255, 255, 0.85) 0%, transparent 70%),
    /* 左上第二个高光（中心强高光）- 面积加倍，往左上角调整5% */
    radial-gradient(ellipse 18.8px 12.6px at 25% 25%, rgba(255, 255, 255, 1) 0%, transparent 70%),
    /* 左上第三个高光（半透明大高光）- 面积加倍，往左上偏移5% */
    radial-gradient(ellipse 43.4px 31.8px at 20% 20%, rgba(255, 255, 255, 0.95) 0%, transparent 70%),
    /* 右下角高光（中心强高光）- 位置调整，不透明度70% */
    radial-gradient(ellipse 9.4px 6.3px at 70% 75%, rgba(255, 255, 255, 0.7) 0%, transparent 70%),
    /* 右下角第二个高光（大高光）- 面积与左上角最大高光一致 */
    radial-gradient(ellipse 86.8px 63.6px at 80% 80%, rgba(255, 255, 255, 0.5) 0%, transparent 70%),
    /* 主体渐变 - 过渡区域再往右下角调整 */
    radial-gradient(130% 130% at 92% 92%, #F8FFD4 0%, #AED100 55%, #D3FE00 100%);
  box-shadow: 
    /* 主内阴影（左下高光） */
    inset 8.53px 8.53px 7.25px #D4FF00,
    /* 左上高光内阴影 */
    inset -2.56px -2.56px 4.26px rgba(255, 255, 255, 0.22),
    /* 中心高光内阴影 */
    inset 0 0 1.29px rgba(255, 255, 255, 0.8),
    /* 底部外发光 */
    -0.62px 7.5px 10px rgba(212, 255, 0, 0.25),
    /* 右侧高光投影 */
    4.48px 3.62px 6.58px -2.77px rgba(255, 255, 255, 0.7);
}

.ai-text {
  color: rgba(249, 254, 255, 0.5);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>

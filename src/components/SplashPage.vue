<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
    <div class="absolute splash-gradient"></div>
    <div class="absolute splash-particles">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
    </div>
    <div class="relative z-10 flex flex-col items-center">
      <div class="w-64 h-64 flex items-center justify-center mascot-container">
        <img src="/images/coachai.front.png" alt="CoachAI Mascot" class="w-full h-full object-contain mascot" />
      </div>
      <div class="mt-8 flex flex-col items-center">
        <h1 class="splash-title">CoachAI</h1>
        <div class="mt-3 title-line"></div>
        <p class="splash-subtitle">不止记录数据，更守护你的运动习惯</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const emit = defineEmits(['complete'])

onMounted(() => {
  setTimeout(() => {
    emit('complete')
  }, 4000)
})
</script>

<style scoped>
.splash-gradient {
  width: 550px;
  height: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  background: radial-gradient(
    circle,
    rgba(212, 255, 0, 0.5) 0%,
    rgba(212, 255, 0, 0.3) 25%,
    rgba(212, 255, 0, 0.15) 50%,
    rgba(255, 255, 255, 0) 75%
  );
  opacity: 0;
  animation: fadeInScale 2.5s ease-out forwards, pulse 2s ease-in-out infinite 2.5s;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: translate(-50%, -60%) scale(0.4);
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -60%) scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: translate(-50%, -60%) scale(1);
  }
  50% {
    opacity: 0.85;
    transform: translate(-50%, -60%) scale(1.05);
  }
}

.splash-particles {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(212, 255, 0, 0.3);
  opacity: 0;
}

.particle-1 {
  width: 12px;
  height: 12px;
  top: 30%;
  right: 25%;
  animation: particleFloat1 3s ease-in-out infinite;
}

.particle-2 {
  width: 8px;
  height: 8px;
  top: 60%;
  left: 20%;
  animation: particleFloat2 2.5s ease-in-out infinite 0.5s;
}

.particle-3 {
  width: 10px;
  height: 10px;
  top: 40%;
  left: 35%;
  animation: particleFloat3 3.5s ease-in-out infinite 1s;
}

.particle-4 {
  width: 6px;
  height: 6px;
  top: 70%;
  right: 30%;
  animation: particleFloat4 2.8s ease-in-out infinite 0.8s;
}

@keyframes particleFloat1 {
  0%, 100% {
    opacity: 0;
    transform: translateY(0) translateX(0);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) translateX(20px);
  }
}

@keyframes particleFloat2 {
  0%, 100% {
    opacity: 0;
    transform: translateY(0) translateX(0);
  }
  20% {
    opacity: 0.8;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateY(-25px) translateX(-15px);
  }
}

@keyframes particleFloat3 {
  0%, 100% {
    opacity: 0;
    transform: translateY(0) translateX(0);
  }
  20% {
    opacity: 0.9;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
    transform: translateY(-40px) translateX(25px);
  }
}

@keyframes particleFloat4 {
  0%, 100% {
    opacity: 0;
    transform: translateY(0) translateX(0);
  }
  20% {
    opacity: 0.7;
  }
  80% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    transform: translateY(-20px) translateX(-10px);
  }
}

.mascot-container {
  animation: mascotFloat 3s ease-in-out infinite;
}

@keyframes mascotFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.mascot {
  animation: mascotBounceIn 0.8s ease-out 0.5s forwards;
  opacity: 0;
  transform: scale(0.8);
}

@keyframes mascotBounceIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.splash-title {
  font-size: 52px;
  line-height: 64px;
  font-weight: 900;
  letter-spacing: -2px;
  text-align: center;
  color: #1A1C1E;
  opacity: 0;
  animation: titleFadeIn 0.8s ease-out 1s forwards;
}

@keyframes titleFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.title-line {
  width: 0;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(90deg, transparent, #D4FF00, transparent);
  animation: lineGrow 0.8s ease-out 1.5s forwards;
}

@keyframes lineGrow {
  0% {
    width: 0;
  }
  100% {
    width: 64px;
  }
}

.splash-subtitle {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #5D5E61;
  text-align: center;
  margin-top: 16px;
  opacity: 0;
  animation: subtitleFadeIn 0.8s ease-out 2s forwards;
}

@keyframes subtitleFadeIn {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

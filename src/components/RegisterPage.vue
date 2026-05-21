<template>
  <div class="min-h-screen bg-white flex flex-col relative overflow-hidden">
    <div class="absolute inset-0" style="background: radial-gradient(circle at 50% 100%, rgba(212, 255, 0, 0.1) 0%, rgba(212, 255, 0, 0.03) 40%, rgba(255, 255, 255, 0) 70%);"></div>
    <div class="relative z-10 flex flex-col h-full px-6">
      <div class="h-16 flex items-center pt-4">
        <button @click="goBack" class="p-2 -ml-2">
          <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>
      <div class="flex flex-col items-center mb-8">
        <div class="w-20 h-20 rounded-full flex items-center justify-center mb-6" style="background: radial-gradient(circle, #D4FF00 0%, #E5FF5C 100%); box-shadow: 0 0 30px 0 rgba(212, 255, 0, 0.4);">
          <span class="text-heading font-bold" style="color: #1A1C1E;">AI</span>
        </div>
        <h1 class="text-heading font-bold text-text-primary" style="font-size: 32px; line-height: 40px;">创建 CoachAI 账号</h1>
        <p class="text-body font-normal text-text-secondary mt-2 text-center" style="color: #646A73;">注册以开启你的个性化训练计划</p>
      </div>
      <div class="flex-1 flex flex-col overflow-y-auto pb-4">
        <div class="mb-4">
          <label class="block text-subtitle font-semibold mb-3" style="color: #1A1C1E;">手机号/邮箱</label>
          <input 
            v-model="account" 
            type="text" 
            placeholder="请输入邮箱或手机号"
            class="w-full px-5 rounded-2xl outline-none transition-all duration-300"
            :class="accountFocused ? 'shadow-[0_0_0_3px_rgba(212,255,0,0.3)]' : ''"
            style="background-color: #F5F5F5; border: none; height: 50px;"
            @focus="accountFocused = true"
            @blur="accountFocused = false"
          />
        </div>
        <div class="mb-4">
          <label class="block text-subtitle font-semibold mb-3" style="color: #1A1C1E;">验证码</label>
          <div class="flex space-x-3">
            <input 
              v-model="verifyCode" 
              type="text" 
              placeholder="请输入验证码"
              class="flex-1 px-5 rounded-2xl outline-none transition-all duration-300"
              :class="verifyCodeFocused ? 'shadow-[0_0_0_3px_rgba(212,255,0,0.3)]' : ''"
              style="background-color: #F5F5F5; border: none; height: 50px;"
              @focus="verifyCodeFocused = true"
              @blur="verifyCodeFocused = false"
            />
            <button 
              @click="sendVerifyCode"
              class="px-5 rounded-2xl font-medium text-small whitespace-nowrap"
              style="background: #D4FF00; color: #1A1C1E; height: 50px;"
              :disabled="countdown > 0"
            >
              {{ countdown > 0 ? `${countdown}s` : '获取验证码' }}
            </button>
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-subtitle font-semibold mb-3" style="color: #1A1C1E;">设置密码</label>
          <div class="relative">
            <input 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="请设置6-16位密码"
              class="w-full px-5 pr-14 rounded-2xl outline-none transition-all duration-300"
              :class="passwordFocused ? 'shadow-[0_0_0_3px_rgba(212,255,0,0.3)]' : ''"
              style="background-color: #F5F5F5; border: none; height: 50px;"
              @focus="passwordFocused = true"
              @blur="passwordFocused = false"
            />
            <button 
              type="button" 
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <svg v-if="!showPassword" class="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              <svg v-else class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="mb-5">
          <label class="block text-subtitle font-semibold mb-3" style="color: #1A1C1E;">确认密码</label>
          <div class="relative">
            <input 
              v-model="confirmPassword" 
              :type="showConfirmPassword ? 'text' : 'password'" 
              placeholder="请再次输入密码"
              class="w-full px-5 pr-14 rounded-2xl outline-none transition-all duration-300"
              :class="confirmPasswordFocused ? 'shadow-[0_0_0_3px_rgba(212,255,0,0.3)]' : ''"
              style="background-color: #F5F5F5; border: none; height: 50px;"
              @focus="confirmPasswordFocused = true"
              @blur="confirmPasswordFocused = false"
            />
            <button 
              type="button" 
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <svg v-if="!showConfirmPassword" class="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              <svg v-else class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex items-start space-x-3 mb-8">
          <button 
            @click="agreed = !agreed"
            class="mt-0.5 w-5 h-5 rounded flex items-center justify-center border-2 transition-all"
            :class="agreed ? 'bg-primary border-primary' : 'border-border'"
          >
            <svg v-if="agreed" class="w-3.5 h-3.5" fill="none" stroke="#1A1C1E" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
            </svg>
          </button>
          <p class="text-small font-normal leading-relaxed text-text-secondary" style="color: #646A73;">
            我已阅读并同意
            <span class="font-medium" style="color: #D4FF00;">《用户协议》</span>
            和
            <span class="font-medium" style="color: #D4FF00;">《隐私政策》</span>
          </p>
        </div>
        <button 
          @click="handleRegister"
          class="w-full h-14 rounded-[24px] font-semibold text-subtitle flex items-center justify-center"
          style="background: linear-gradient(90deg, #D4FF00 0%, #E5FF5C 100%); box-shadow: 0 8px 24px rgba(212, 255, 0, 0.35); color: #1A1C1E;"
        >
          注册
        </button>
      </div>
      <div class="py-6 flex justify-center">
        <p class="text-body font-normal text-text-secondary" style="color: #646A73;">
          已有账号？
          <button @click="goToLogin" class="font-semibold" style="color: #D4FF00;">立即登录</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['back', 'login', 'register'])

const account = ref('')
const verifyCode = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const accountFocused = ref(false)
const verifyCodeFocused = ref(false)
const passwordFocused = ref(false)
const confirmPasswordFocused = ref(false)
const agreed = ref(false)
const countdown = ref(0)

const goBack = () => {
  emit('back')
}

const goToLogin = () => {
  emit('login')
}

const sendVerifyCode = () => {
  if (countdown.value > 0) return
  countdown.value = 60
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}

const handleRegister = () => {
  emit('register')
}
</script>

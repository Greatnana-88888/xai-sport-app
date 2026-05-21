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
      <div class="flex flex-col items-center mb-10">
        <div class="w-20 h-20 rounded-full flex items-center justify-center mb-6" style="background: radial-gradient(circle, #D4FF00 0%, #E5FF5C 100%); box-shadow: 0 0 30px 0 rgba(212, 255, 0, 0.4);">
          <span class="text-heading font-bold" style="color: #1A1C1E;">AI</span>
        </div>
        <h1 class="text-heading font-bold text-text-primary" style="font-size: 32px; line-height: 40px;">欢迎回到 CoachAI</h1>
        <p class="text-body font-normal text-text-secondary mt-2" style="color: #646A73;">登录以同步您的训练数据与身体状态</p>
      </div>
      <div class="flex-1 flex flex-col">
        <div class="mb-5">
          <label class="block text-subtitle font-semibold mb-3" style="color: #1A1C1E;">账号</label>
          <input 
            v-model="account" 
            type="text" 
            placeholder="请输入邮箱或手机号"
            class="w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300"
            :class="accountFocused ? 'shadow-[0_0_0_3px_rgba(212,255,0,0.3)]' : ''"
            style="background-color: #F5F5F5; border: none;"
            @focus="accountFocused = true"
            @blur="accountFocused = false"
          />
        </div>
        <div class="mb-3">
          <label class="block text-subtitle font-semibold mb-3" style="color: #1A1C1E;">密码</label>
          <div class="relative">
            <input 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="请输入密码"
              class="w-full px-5 py-4 pr-14 rounded-2xl outline-none transition-all duration-300"
              :class="passwordFocused ? 'shadow-[0_0_0_3px_rgba(212,255,0,0.3)]' : ''"
              style="background-color: #F5F5F5; border: none;"
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
        <div class="flex justify-end mb-10">
          <button class="text-small font-normal text-text-secondary" style="color: #646A73;">忘记密码？</button>
        </div>
        <button 
          @click="handleLogin"
          class="w-full h-14 rounded-[24px] font-semibold text-subtitle flex items-center justify-center"
          style="background: linear-gradient(90deg, #D4FF00 0%, #E5FF5C 100%); box-shadow: 0 8px 24px rgba(212, 255, 0, 0.35); color: #1A1C1E;"
        >
          登录
        </button>
      </div>
      <div class="py-8 flex justify-center">
        <p class="text-body font-normal text-text-secondary" style="color: #646A73;">
          还没有账号？
          <button @click="goToRegister" class="font-semibold" style="color: #D4FF00;">立即注册</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['back', 'register', 'login'])

const account = ref('')
const password = ref('')
const showPassword = ref(false)
const accountFocused = ref(false)
const passwordFocused = ref(false)

const goBack = () => {
  emit('back')
}

const goToRegister = () => {
  emit('register')
}

const handleLogin = () => {
  emit('login')
}
</script>

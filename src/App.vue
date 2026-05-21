<template>
  <div class="min-h-screen">
    <!-- 欢迎引导页预览模式 -->
    <OnboardingPreview v-if="currentPage === 'preview'" />
    
    <!-- 启动页 -->
    <SplashPage v-else-if="currentPage === 'splash'" @complete="handleSplashComplete" />
    
    <!-- 欢迎引导页 -->
    <OnboardingPage v-else-if="currentPage === 'onboarding'" @complete="goToLogin" />
    
    <!-- 登录页 -->
    <LoginPage v-else-if="currentPage === 'login'" @back="goToSplash" @register="goToRegister" @login="handleLogin" />
    
    <!-- 注册页 -->
    <RegisterPage v-else-if="currentPage === 'register'" @back="goToLogin" @login="goToLogin" @register="handleRegister" />
    
    <!-- 主要功能页面 -->
    <div v-else class="bg-bg min-h-screen">
      <HomePage v-if="currentPage === 0" @go-to-ai="goToLoading" />
      <WorkoutPage v-else-if="currentPage === 1" @go-to-ai="goToLoading" />
      <DataPage v-else-if="currentPage === 2" />
      <ProfilePage v-else-if="currentPage === 3" />
      <AILoadingPage v-else-if="currentPage === 'loading'" @complete="goToAIOnboarding" />
      <AIOnboardingPage v-else-if="currentPage === 'ai-onboarding'" @complete="goToChat" @chat="handleQuickChat" />
      <AIChatPage v-else-if="currentPage === 'chat'" @back="goToHome" />
      
      <!-- 底部导航栏 - 仅在主要页面显示 -->
      <NavBar v-if="typeof currentPage === 'number'" :activeIndex="currentPage" @update:activeIndex="handleNavigate" @ai-click="goToLoading" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HomePage from './components/HomePage.vue'
import WorkoutPage from './components/WorkoutPage.vue'
import DataPage from './components/DataPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import AILoadingPage from './components/AILoadingPage.vue'
import AIChatPage from './components/AIChatPage.vue'
import AIOnboardingPage from './components/AIOnboardingPage.vue'
import SplashPage from './components/SplashPage.vue'
import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'
import OnboardingPage from './components/OnboardingPage.vue'
import OnboardingPreview from './components/OnboardingPreview.vue'

const currentPage = ref('splash')

const handleNavigate = (index) => {
  currentPage.value = index
}

const goToLoading = () => {
  currentPage.value = 'loading'
}

const goToAIOnboarding = () => {
  currentPage.value = 'ai-onboarding'
}

const goToChat = () => {
  currentPage.value = 'chat'
}

const handleQuickChat = (question) => {
  localStorage.setItem('quickQuestion', question)
  currentPage.value = 'chat'
}

const goToHome = () => {
  currentPage.value = 0
}

const goToSplash = () => {
  currentPage.value = 'splash'
}

const goToLogin = () => {
  currentPage.value = 'login'
}

const goToRegister = () => {
  currentPage.value = 'register'
}

const handleSplashComplete = () => {
  const isFirstOpen = localStorage.getItem('isFirstOpen')
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  
  if (isLoggedIn === 'true') {
    currentPage.value = 0
  } else if (isFirstOpen !== 'false') {
    currentPage.value = 'onboarding'
  } else {
    currentPage.value = 'login'
  }
}

const handleLogin = () => {
  localStorage.setItem('isLoggedIn', 'true')
  currentPage.value = 0
}

const handleRegister = () => {
  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('isFirstOpen', 'false')
  currentPage.value = 0
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  if (params.get('preview') === 'true') {
    currentPage.value = 'preview'
    return
  }
  
  const isFirstOpen = localStorage.getItem('isFirstOpen')
  if (isFirstOpen === null) {
    localStorage.setItem('isFirstOpen', 'true')
  }
})
</script>
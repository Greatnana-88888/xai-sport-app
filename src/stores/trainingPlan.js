import { reactive } from 'vue'

const trainingPlan = reactive({
  exercises: [
    {
      id: 1,
      name: '杠铃卧推',
      targetMuscles: '胸大肌、三角肌前束',
      image: '/images/bench-press.png',
      sets: 4,
      reps: '8-10 次',
      weight: 60,
      unit: 'kg',
      isAdjusted: false,
      originalWeight: 60,
      adjustmentInfo: null
    },
    {
      id: 2,
      name: '哑铃推举',
      targetMuscles: '三角肌中束、三头肌',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100',
      sets: 3,
      reps: '12 次',
      weight: 15,
      unit: 'kg',
      isAdjusted: false,
      originalWeight: 15,
      adjustmentInfo: null
    },
    {
      id: 3,
      name: '绳索下压',
      targetMuscles: '三头肌长头、外侧头',
      image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=100',
      sets: 3,
      reps: '15 次',
      weight: 20,
      unit: 'kg',
      isAdjusted: false,
      originalWeight: 20,
      adjustmentInfo: null
    }
  ],
  hasAdjustments: false,
  lastAdjustmentTime: null
})

const adjustTrainingPlan = (adjustments) => {
  adjustments.forEach(adjustment => {
    const exercise = trainingPlan.exercises.find(ex => 
      ex.name.includes(adjustment.exerciseName) || 
      adjustment.exerciseName.includes(ex.name)
    )
    
    if (exercise && adjustment.newWeight) {
      exercise.originalWeight = exercise.weight
      exercise.weight = adjustment.newWeight
      exercise.isAdjusted = true
      exercise.adjustmentInfo = adjustment.reason
      trainingPlan.hasAdjustments = true
      trainingPlan.lastAdjustmentTime = new Date().toLocaleString()
    }
  })
}

const resetTrainingPlan = () => {
  trainingPlan.exercises.forEach(exercise => {
    exercise.weight = exercise.originalWeight
    exercise.isAdjusted = false
    exercise.adjustmentInfo = null
  })
  trainingPlan.hasAdjustments = false
  trainingPlan.lastAdjustmentTime = null
}

export { trainingPlan, adjustTrainingPlan, resetTrainingPlan }
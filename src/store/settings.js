// Utilities
import { defineStore } from 'pinia'

// 定義一個叫做 Settings 的 store
export const useSettingsStore = defineStore('settings', {
  // 這個 store 的資料，必須要寫成 function return
  state: () => ({
    alarms: [
      {id: 1, name: 'Alarm', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      {id: 2, name: 'yay', file: new URL('@/assets/yay.mp3', import.meta.url).href }
    ],
    selectedAlarm: 1,
    notify: false
  }),
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-list',
    paths: [
      'selectedAlarm', 'notify'
    ]
  }
})

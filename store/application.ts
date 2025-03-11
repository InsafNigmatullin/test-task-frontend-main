import { defineStore } from 'pinia'

/**
 * Хранилище приложения для управления глобальными состояниями.
 */
export const useApplicationStore = defineStore('application', () => {
  const welcome = 'Привет!'

  return {
    welcome,
  }
})

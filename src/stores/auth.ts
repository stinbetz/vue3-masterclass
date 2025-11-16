export const useAuthStore = defineStore('auth', () => {
  const auth = ref({
    token: '',
  })

  return {
    auth,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}

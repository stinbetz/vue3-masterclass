import type { CustomError, ExtendedPostgrestError } from '@/types/error'
import type { PostgrestError } from '@supabase/supabase-js'

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)

  const setError = ({
    error,
    customCode,
  }: {
    error: string | PostgrestError | Error
    customCode?: number
  }) => {
    if (typeof error === 'string') {
      activeError.value = Error(error)
      activeError.value.customCode = customCode || 500
      return
    } else if (error instanceof Error) {
      activeError.value = error
      ;(activeError.value as CustomError).customCode = customCode || 500
    }

    activeError.value = error
    ;(activeError.value as ExtendedPostgrestError).statusCode = customCode || 500
  }

  const clearError = () => {
    activeError.value = null
  }

  return {
    activeError,
    setError,
    clearError,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}

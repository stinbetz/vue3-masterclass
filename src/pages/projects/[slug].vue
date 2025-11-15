<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = computed(() => {
  const p = route.params?.slug
  if (Array.isArray(p)) return p[0] ?? ''
  return (p ?? '') as string
})
</script>

<template>
  <h1>Project {{ slug }}</h1>
  <RouterLink to="/">Go home</RouterLink>
</template>

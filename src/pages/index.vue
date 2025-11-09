<script setup lang="ts"></script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 'Schroederface' } }"
      >Go to Schroeder project</RouterLink
    >
    <RouterLink :to="{ name: '/projects/' }">Go to Projects</RouterLink>
  </div>
</template>

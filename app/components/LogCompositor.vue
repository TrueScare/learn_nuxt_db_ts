<script setup lang="ts">
import type { UnwrapRef } from 'vue'

const logs: Ref<UnwrapRef<string>, UnwrapRef<string> | string> = ref('')

updateListing()

async function updateListing() {
  await $fetch('/api/LogEntries')
    .then((res) => {
      logs.value = res
    })
}
</script>

<template>
  <slot name="default">
    <LogEntry @update="updateListing" />
    <LogListing :logs="logs" />
  </slot>
</template>

<style scoped>

</style>

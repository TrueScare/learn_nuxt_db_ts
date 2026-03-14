<script setup lang="ts">
const logs = ref<LogEntry[]>([])

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

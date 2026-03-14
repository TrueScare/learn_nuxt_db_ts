<script setup lang="ts">
defineProps({
  logs: Object as PropType<LogEntry[]>
})
</script>

<template>
  <slot name="default">
    <div
      v-for="log in logs"
      :key="log.id"
    >
      <div class="font-bold">
        {{ log.title }}
      </div>
      <div>
        {{ log.content }}
      </div>
    </div>
  </slot>
</template>

<style scoped>

</style>

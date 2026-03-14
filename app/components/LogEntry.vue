<script setup lang="ts">
const emit = defineEmits(['update'])
const title = ref('')
const content = ref('')

async function saveLogEntry() {
  await $fetch('/api/LogEntry', {
    method: 'PUT',
    body: {
      title: title.value,
      content: content.value
    }
  }).then(() => {
    emit('update', { title: title.value, content: content.value })
  })
}
</script>

<template>
  <slot name="default">
    <div>
      <UInput
        id="log-title"
        v-model="title"
        name="title"
        type="text"
      />
      <UInput
        id="log-body"
        v-model="content"
        name="body"
        type="text"
      />

      <UButton @click="saveLogEntry">
        />
      </ubutton>
    </div>
  </slot>
</template>

<style scoped>

</style>

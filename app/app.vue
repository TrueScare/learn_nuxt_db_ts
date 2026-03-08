<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const { data: logs } = useFetch('/api/getAllLogEntries')
</script>

<template>
  <UContainer>
    <div
      v-for="log in logs"
      :key="log.id"
    >
      <div class="font-bold">
        {{ log.title }}
      </div>
      <div>
        {{ log.body }}
      </div>
    </div>
  </UContainer>
</template>

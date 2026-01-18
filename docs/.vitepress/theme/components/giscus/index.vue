<template>
  <div class="giscus-wrapper" style="margin-top: 36px;">
    <Giscus
      :key="page.filePath"
      repo="typeofNaN/the-age-of-thirty"
      repo-id="R_kgDOQ8Lc7w"
      category="General"
      category-id="DIC_kwDOQ8Lc784C1G7K"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="bottom"
      lang="zh-CN"
      crossorigin="anonymous"
      :theme="isDark ? 'dark' : 'light'"
    />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { inBrowser, useData } from 'vitepress'
import Giscus from '@giscus/vue'

const { isDark, page } = useData()

watch(isDark, (dark) => {
  if (!inBrowser) return

  const iframe = document
    .querySelector('giscus-widget')
    ?.shadowRoot?.querySelector('iframe')

  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? 'dark' : 'light' } } },
    'https://giscus.app'
  )
})
</script>
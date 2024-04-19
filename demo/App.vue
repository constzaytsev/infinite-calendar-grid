<script setup lang="ts">
import { ref } from 'vue'
import { createItems } from './fakeData'
import { InfiniteCalendarGrid } from '../dist/infinite-calendar-grid'
import '../dist/style.css'

const items = ref<{ id: string; name: string; date: number }[]>(createItems())
</script>

<template>
  <InfiniteCalendarGrid
    :items="items"
    fieldWithDate="date"
    @changeInterval="() => {}"
    v-slot="{ items, date }"
  >
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
  </InfiniteCalendarGrid>
</template>

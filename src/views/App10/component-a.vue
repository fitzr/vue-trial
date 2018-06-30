<template>
  <button @click="hello">hello</button>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import HelloMix from './hello-mix.ts'

@Component
export default class ComponentA extends mixins<HelloMix>(HelloMix) {
}
</script>

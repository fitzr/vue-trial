<template>
  <button @click="hello">hello</button>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import HelloMix from './hello-mix'

@Component
export default class ComponentA extends mixins(HelloMix) {
}
</script>

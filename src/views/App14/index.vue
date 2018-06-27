<template>
  <div>
    <button @click="toggle=!toggle">toggle</button>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <transition>
        <circle cx="80" cy="75" r="50" :key="fill" :fill="fill"></circle>
      </transition>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    toggle = false
    get fill(): string {
        return this.toggle ? 'lightpink' : 'skyblue'
    }
}
</script>

<style lang="sass" scoped>
.v-enter-active, .v-leave-active
  transition: all 1s
.v-leave-active
  position: absolute
.v-enter
  opacity: 0
  transform: translateX(-20px)
.v-leave-to
  opacity: 0
  transform: translateX(20px)
</style>

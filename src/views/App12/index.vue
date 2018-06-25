<template>
  <div>
    <transition appear>
      <div v-show="show">
        TRANSITION
      </div>
    </transition>
    <transition appear name="bar" mode="in-out">
      <div v-if="show" key="a">TRUE</div>
      <div v-else="show" key="b">FALSE</div>
    </transition>

    <button @click="count++">inc</button>
    <transition name="count">
      <div :key="count">{{ count }}</div>
    </transition>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 1s, transform 1s;
}
.v-enter {
  opacity: 0;
  transform: translateX(-10px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.bar-enter-active, .bar-leave-active {
  transition: opacity 1s, transform 1s;
}
.bar-enter {
  opacity: 0;
  transform: translateX(-10px);
}
.bar-leave-to {
  opacity: 0;
  transform: translateY(10px);
  position: absolute;
}
.count-enter-active, .count-leave-active {
  transition: opacity 1s;
}
.count-leave-active {
  position: absolute;
}
.count-enter, .count-leave-to {
  opacity: 0;
}
</style>

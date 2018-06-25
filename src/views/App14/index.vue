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

<script src="./script.ts" lang="ts"></script>

<style>
  .v-enter-active, .v-leave-active {
    transition: all 1s;
  }
  .v-leave-active {
    position: absolute;
  }
  .v-enter {
    opacity: 0;
    transform: translateX(-20px);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
</style>

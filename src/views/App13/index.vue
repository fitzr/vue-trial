<template>
  <div>
    <button @click="order=!order">order</button>
    <transition-group name="list" tag="ul">
      <li v-for="item in sortedList" :key="item.id">
        {{ item.name }} ${{ item.price }}
      </li>
    </transition-group>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style>
  .list-enter-active, .list-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .list-leave-active {
    position: absolute;
  }
  .list-move:not(.list-leave-active) {
    transition: transform 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
  }
</style>

<template>
  <div v-example>
    <select v-model="current">
      <option v-for="topic in topics" :value="topic.value">
        {{ topic.name }}
      </option>
    </select>
    <div v-for="item in list">{{ item.full_name }}</div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style>
  .red {
    color: #f00;
  }
  @keyframes cloak-in {
    0% { opacity: 0; }
  }
  #msg {
    animation: cloak-in 1s;
  }
  #msg[v-cloak] {
    opacity: 0;
  }
</style>

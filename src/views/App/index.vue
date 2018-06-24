<template>
  <div>
    <input v-model.number="budget"> 円以下に絞り込む
    <input v-model.number="limit"> 件表示
    <p>{{ matched.length }} 件中 {{ limited.length }} 件表示 </p>
    <button @click="toggleOrder">切替</button>
    <ul>
      <li v-for="item in limited" :key="item.id">
        {{ item.name }} {{ item.price | localeNum }} 円
      </li>
    </ul>
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

<template>
  <div>
    <button @click="current='comp-board'">list</button>
    <button @click="current='comp-form'">form</button>
    <keep-alive>
      <div :is="current"></div>
    </keep-alive>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

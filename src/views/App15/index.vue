<template>
  <div>
    <component :is="'custom-input'" v-model="text"></component>
    <custom-input v-model="text"></custom-input>
    <p>{{ text }}</p>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style>
</style>

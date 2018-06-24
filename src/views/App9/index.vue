<template>
  <div>
    <button @click="current^=1">toggle</button>
    <div :is="component"></div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

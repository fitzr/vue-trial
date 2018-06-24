<template>
  <div>
    <my-component :val='12' @click.native="parentsMethod('BAR')"></my-component>
    <my-component id="hoge" :val='msg' @handle-event="parentsMethod"></my-component>
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

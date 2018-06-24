<template>
  <div>
    <p>{{ msg }}</p>
    <my-component val='component A' ref="child"></my-component>
    <my-component val='component B' @child-event="handleChild($event)"></my-component>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

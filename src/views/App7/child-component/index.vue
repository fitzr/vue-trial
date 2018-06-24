<template>
  <div>
    <p>name.{{ name }} HP.{{ hp }}</p>
    <p>name <input v-model='localName'></p>
    <p>HP <input v-model.number='localHp'></p>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

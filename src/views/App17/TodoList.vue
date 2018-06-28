<template lang="pug">
  ul
    li(v-for="todo in todos" :key="todo.id")
      slot(:todo="todo") {{ todo.text }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TodoList extends Vue {
  @Prop()
  todos: Object[]
}
</script>

<style scoped>

</style>

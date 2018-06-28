<template lang="pug">
  todo-list(:todos="todos")
    template(slot-scope="{ todo }")
      span(v-if="todo.isComplete") ✓
      | {{ todo.text }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoList from './TodoList.vue'

@Component({
    components: { TodoList }
})
export default class App extends Vue {
    todos = [
        { id: 1, text: 'todo one' },
        { id: 2, text: 'todo two' },
        { id: 3, text: 'todo three', isComplete: true },
        { id: 4, text: 'todo four' },
    ]
}
</script>

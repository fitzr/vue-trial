<template lang="pug">
  div
    input(ref="usernameInput")
    button(@click="focus") focus
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    // https://github.com/vuejs/vue-class-component/blob/master/example/App.vue#L57-L60
    $refs: {
        usernameInput: HTMLInputElement
    }

    focus() {
        this.$refs.usernameInput.focus()
    }
}
</script>


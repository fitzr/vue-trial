<template lang="pug">
  base-input(
     v-model="username"
     label="LABEL"
     class="username-input"
     placeholder="Enter your username"
     @focus="focused"
  )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseInput from './BaseInput.vue'

@Component({
    components: { BaseInput }
})
export default class App extends Vue {
    username = ''
    focused() {
        console.log('focused')
    }
}
</script>

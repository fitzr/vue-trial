<template>
  <div>
    <component :is="'custom-input'" v-model="text"></component>
    <custom-input v-model="text"></custom-input>
    <p>{{ text }}</p>
  </div>
</template>

<script type="ts" lang="ts">
import { Component, Prop, Model, Vue, Watch } from 'vue-property-decorator'
import CustomInput from './custom-input.vue'

@Component({
components: { CustomInput }
})
export default class App extends Vue {
text = 'init'
}
</script>
<style>
</style>

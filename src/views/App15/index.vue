<template>
  <div>
    <component is="CustomInput" v-model="text"></component>
    <CustomInput data-test="bazz" v-model="text"></CustomInput>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CustomInput from './CustomInput.vue'

@Component({
components: { CustomInput }
})
export default class App extends Vue {
    text = 'init'
}
</script>
<style>
</style>

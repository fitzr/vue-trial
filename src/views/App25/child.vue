<template>
  <div>
    <p>component 1</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  @Prop()
  paramsA: {}

  @Prop()
  paramsB: {}

  get combine () {
    return [this.paramsA, this.paramsB]
  }

  @Watch('combine')
  onChange(newVal, oldVal) {
      console.log('onChange')
      console.log(`paramA: ${newVal[0] === oldVal[0]}`)
      console.log(`paramB: ${newVal[1] === oldVal[1]}`)

  }
}
</script>

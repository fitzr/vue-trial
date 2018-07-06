<template lang="pug">
  div
    input(
      type="text"
      placeholder="input here..."
      @click="onClick"
      size="30"
      readonly
    )
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class CustomDateRangePicker extends Vue {
    @Prop()
    value: Date | null

    onClick() {

    }
}
</script>

<style lang="sass" scoped>

</style>

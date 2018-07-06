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
import DateRange from './DateRange'

@Component
export default class CustomDateRangePicker extends Vue {
    @Prop()
    value: DateRange

    onClick() {
    }
}
</script>

<style lang="sass" scoped>

</style>

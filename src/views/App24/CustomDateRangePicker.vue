<template lang="pug">
  div
    input(
      type="text"
      placeholder="input here..."
      @click="onClick"
      size="30"
      readonly
    )
    div(v-if="showDateRangePicker")
      v-date-picker(
        mode="range"
        :show-day-popover="false"
        :formats="{title:'YYYY MMM'}"
        is-inline
        is-double-paned
      )
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import DateRange from './DateRange'

@Component
export default class CustomDateRangePicker extends Vue {
    showDateRangePicker = false

    @Prop()
    value: DateRange

    onClick() {
        this.showDateRangePicker = !this.showDateRangePicker
    }
}
</script>

<style lang="sass" scoped>

</style>

<template lang="pug">
  el-popover(
    placement="bottom"
    trigger="click"
  )
    .picker-container
      .calendar
        v-date-picker(
          mode="range"
          :show-day-popover="false"
          :formats="{title:'YYYY MMM'}"
          is-inline
          is-double-paned
        )
      button.button hoge
      button.button hoge
      button.button hoge
      button.button hoge
      button.button hoge
      button.button hoge
      button.button hoge
      button.button hoge
      button.button hoge
    input(
      slot="reference"
      type="text"
      placeholder="input here..."
      size="30"
      readonly
    )
</template>


<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class CustomDateRangePicker extends Vue {
    @Prop()
    value: DateRange
}
</script>

<style lang="sass" scoped>
.picker-container
  display: grid
  grid-template: repeat(9, 30px) / 550px 200px
  align-items: center
  justify-items: center

.calendar
  grid-column: 1 / 2
  grid-row: 1 / -1

.button
  align-self: stretch
  justify-self: stretch
</style>

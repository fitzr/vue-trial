<template lang="pug">
  div
    input(
      type="text"
      placeholder="input here..."
      @focus="showDateRangePicker = true"
      @blur="showDateRangePicker = false"
      size="30"
      readonly
    )
    .pickerContainer(v-if="showDateRangePicker")
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
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class CustomDateRangePicker extends Vue {
    showDateRangePicker = false

    @Prop()
    value: DateRange
}
</script>

<style lang="sass" scoped>
.pickerContainer
  display: grid
  border: solid 1px darkgray
  grid-template: repeat(9, 35px) / 550px 150px
  width: 700px
  height: 315px
  align-content: stretch
  justify-content: stretch
.calendar
  grid-row: 1 / -1
  grid-column: 1 / 2
  align-self: center
  justify-self: center
</style>

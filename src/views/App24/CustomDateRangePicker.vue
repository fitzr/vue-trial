<template lang="pug">
  el-popover(
    placement="bottom"
    trigger="click"
    v-model="showPopover"
  )
    .picker-container
      .calendar
        v-date-picker(
          mode="range"
          v-model="selectingDateRange"
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
      button.button(@click="onSubmit") 決定
    input.input(
      slot="reference"
      type="text"
      :value="defaultDateRangeText"
      placeholder="input here..."
      readonly
    )
</template>


<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

@Component
export default class CustomDateRangePicker extends Vue {

    @Prop()
    value: DateRange // 確定済の値

    selectingDateRange = this.value // 選択中の値

    showPopover = false

    @Emit()
    input(value: DateRange) {
    }

    onSubmit() {
        this.input(this.selectingDateRange)
        this.showPopover = false
    }

    get defaultDateRangeText() {
        return this.value
            ? this.value.start.toLocaleDateString()
            : null
    }
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

.input
  width: 200px
</style>

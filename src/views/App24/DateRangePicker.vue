<template lang="pug">
  //- v-date-picker の props は以下参照
  //- https://docs.vcalendar.io/api.html#date-picker-props
  v-date-picker(
    mode="range",
    :value="dateRange"
    @input="input"
    :show-day-popover="false"
    :formats="{title:'YYYY MMM'}"
    popover-visibility="focus"
    is-double-paned
  )
    //- インプット要素を独自に定義する場合の例
    template(slot-scope="props")
      input.input(
        :value="props.inputValue"
        placeholder="input here..."
        readonly
      )

  //- カレンダーのスタイル変更は以下参照
  //- https://docs.vcalendar.io/layout.html#default
</template>

<script lang="ts">
import {Component, Vue, Model, Emit} from 'vue-property-decorator'

@Component
export default class DateRangePicker extends Vue {
    @Model('input')
    dateRange: DateRange

    @Emit()
    input(dateRange: DateRange) {
    }
}
</script>

<style lang="sass" scoped>
.popover-container
  width: 200px
.input
  width: 200px
</style>

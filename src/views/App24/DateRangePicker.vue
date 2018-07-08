<template lang="pug">
  //- v-date-picker の props は以下参照
  //- https://docs.vcalendar.io/api.html#date-picker-props
  v-date-picker(
    mode="range",
    :value="value"
    @input="input"
    :show-day-popover="false"
    :formats="{title:'YYYY MMM'}"
    is-double-paned
  )
    //- インプット要素を独自に定義する場合の例
    template(slot-scope="props")
      input(
        :value="props.inputValue"
        placeholder="input here..."
        size="30"
        readonly
      )

  //- カレンダーのスタイル変更は以下参照
  //- https://docs.vcalendar.io/layout.html#default
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

@Component
export default class DateRangePicker extends Vue {
    @Prop()
    value: DateRange

    @Emit()
    input(value: DateRange) {
    }
}
</script>

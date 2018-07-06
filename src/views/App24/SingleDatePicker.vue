<template lang="pug">
  v-date-picker(
    mode="single",
    v-model="value"
    @input="input"
    :show-day-popover="false"
    :formats="{title:'YYYY MMM'}"
  )
    //- インプット要素を独自に定義する場合は以下のようにする
    template(slot-scope="props")
      input(
        :value="props.inputValue"
        placeholder="input here..."
        size="30"
        readonly
      )
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

@Component
export default class SingleDatePicker extends Vue {
    @Prop()
    value: Date | null

    @Emit()
    input(value: string) {
    }
}
</script>

<style lang="sass" scoped>

</style>

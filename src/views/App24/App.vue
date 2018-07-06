<template lang="pug">
  div
    single-date-picker(v-model="selectedSingleDate")
    br
    range-date-picker(v-model="selectedRangeDate")
    br
    custom-range-date-picker(v-model="customRangeDate")

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import SingleDatePicker from './SingleDatePicker.vue'
import RangeDatePicker from './RangeDatePicker.vue'
import CustomRangeDatePicker from './ComplexRangeDatePicker.vue'

@Component({
    components: {
        SingleDatePicker,
        RangeDatePicker,
        CustomRangeDatePicker
    }
})
export default class App extends Vue {
    selectedSingleDate: Date | null  = null
    selectedRangeDate: { start: Date, end: Date } | null = null
    customRangeDate: { start: Date, end: Date } | null = null
}
</script>

<style lang="sass" scoped>

</style>

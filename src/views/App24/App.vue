<template lang="pug">
  div
    date-picker(v-model="selectedDate")
    br
    date-range-picker(v-model="selectedDateRange")
    br
    custom-date-range-picker(v-model="customDateRange")

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import DatePicker from './DatePicker.vue'
import DateRangePicker from './DateRangePicker.vue'
import CustomDateRangePicker from './CustomDateRangePicker.vue'

@Component({
    components: {
        DatePicker,
        DateRangePicker,
        CustomDateRangePicker
    }
})
export default class App extends Vue {
    selectedDate: Date | null  = null
    selectedDateRange: DateRange | null = null
    customDateRange: DateRange | null = null
}
</script>

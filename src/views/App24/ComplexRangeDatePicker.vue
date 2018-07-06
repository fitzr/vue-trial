<template lang="pug">
  div
    input(
      type="text"
      placeholder="input here..."
      :value="customRangeDateString"
      @click="onClick"
      size="30"
      readonly
    )
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class CustomRangeDatePicker extends Vue {

}
</script>

<style lang="sass" scoped>

</style>

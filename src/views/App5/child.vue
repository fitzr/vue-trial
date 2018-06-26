<template>
  <div>
    slot is here -> <slot text="hello" name="text_a">parent slot is nothing</slot>
    <br>
    <slot text="hello" name="text_b">parent slot is nothing</slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ChildComponent extends Vue {
}
</script>

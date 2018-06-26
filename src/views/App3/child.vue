<template>
  <div>
    <p>{{ val }}</p>
    <button @click="handleEvent('HOGE')">fire event</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import 'reflect-metadata'

@Component
export default class MyComponent extends Vue {

    @Prop({
        type: Number,
        required: true,
        validator: (v) => v > 10,
    })
    val: number

    @Emit()
    handleEvent(msg: string) {
    }
}
</script>

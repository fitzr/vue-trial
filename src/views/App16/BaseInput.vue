<template lang="pug">
  label {{ label }}
    input(
      v-bind="$attrs"
      v-on="inputListeners"
    )
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component({
    inheritAttrs: false
})
export default class BaseInput extends Vue {
    @Prop()
    label: string
    @Prop()
    value: string

    get inputListeners() {
        return Object.assign(
            {},
            this.$listeners,
            { input: (e:any) => { this.$emit('input', e.target.value) } }
        )
    }
}

</script>

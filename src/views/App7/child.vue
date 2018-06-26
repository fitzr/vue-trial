<template>
  <div>
    <p>name.{{ name }} HP.{{ hp }}</p>
    <p>name <input v-model='localName'></p>
    <p>HP <input v-model.number='localHp'></p>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Emit, Prop} from 'vue-property-decorator'

@Component
export default class ChildComponent extends Vue {

    @Prop()
    name: string

    @Prop()
    hp: number

    get localName() {
        return this.name
    }

    set localName(val: string) {
        this.updateName(val)
    }

    @Emit('update:name')
    updateName(val: string) {}

    get localHp() {
        return this.hp
    }

    set localHp(val: number) {
        this.updateHp(val)
    }

    @Emit('update:hp')
    updateHp(val: number) {}

}
</script>

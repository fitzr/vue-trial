import {Component, Vue, Model, Emit, Prop} from 'vue-property-decorator'
import {PropsDefinition} from "vue/types/options";

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

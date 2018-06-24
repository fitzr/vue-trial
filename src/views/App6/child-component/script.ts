import { Component, Vue, Model, Emit } from 'vue-property-decorator'

@Component
export default class ChildComponent extends Vue {

    @Model('change')
    current: string

    onClick() {
        this.change('20020202')
    }

    @Emit()
    change(arg: string) {}
}

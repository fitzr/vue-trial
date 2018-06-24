import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import 'reflect-metadata'

@Component
export default class App extends Vue {

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

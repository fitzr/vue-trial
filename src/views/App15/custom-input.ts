import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator'

interface MyEvent<T extends EventTarget> extends Event {
    target: T;
}

@Component
export default class App extends Vue {
    @Prop()
    value: string

    inputText($event: MyEvent<HTMLInputElement>) {
        this.input($event.target.value)
    }

    @Emit()
    input(value: string) {
    }
}

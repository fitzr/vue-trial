import { Component, Vue } from 'vue-property-decorator'
import {CreateElement} from "vue";

interface MyEvent<T extends EventTarget> extends Event {
    target: T;
}

@Component
class CompBoard extends Vue {
    render(createElement: CreateElement) {
        return createElement('div', 'Message Board')
    }
}

@Component
class CompForm extends Vue {
    value = ''

    render(createElement: CreateElement) {
        return createElement('div', [
            'Form',
            createElement('textarea', {
                domProps: {
                    value: this.value
                },
                on: {
                    input: (event: MyEvent<HTMLTextAreaElement>) => {
                        this.$emit('input', event.target.value)
                    }
                }
            })
        ])
    }

    created() {
        console.log('created')
    }
    activated() {
        console.log('activated')
    }
    deactivated() {
        console.log('deactivated')
    }
}

@Component({
    components: {
        CompBoard,
        CompForm,
    }
})
export default class App extends Vue {
    current = 'comp-board'
}

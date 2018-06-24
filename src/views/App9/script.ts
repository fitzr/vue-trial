import { Component, Vue } from 'vue-property-decorator'
import ChildComponent from './child-component/index.vue'
import OtherComponent from './child-component/other.vue'

@Component({ components: { ChildComponent, OtherComponent } })
export default class App extends Vue {
    current = 0
    readonly componentTypes = [
        'child-component',
        'other-component',
    ]


    get component() {
        return this.componentTypes[this.current]
    }

}

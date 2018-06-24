import { Component, Vue } from 'vue-property-decorator'
import MyComponent from './MyComponent/index.vue'


let vue = new Vue()

@Component({
    components: { MyComponent }
})
export default class App extends Vue {
    msg: string = 'init'

    handleChild(val: string) {
        this.msg = val
    }
}

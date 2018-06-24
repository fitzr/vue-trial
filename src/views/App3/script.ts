import { Component, Vue } from 'vue-property-decorator'
import MyComponent from './MyComponent/index.vue'

@Component({
    components: { MyComponent }
})
export default class App extends Vue {
    msg = 999

    parentsMethod(msg: string) {
        alert('catch event !!' + msg)
    }
}
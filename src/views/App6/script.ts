import { Component, Vue } from 'vue-property-decorator'
import ChildComponent from './child-component/index.vue'

@Component({
    components: { ChildComponent }
})
export default class App extends Vue {
    date = '20160101'
    date2 = '20160102'
}

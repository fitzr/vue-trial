import { Component, Vue } from 'vue-property-decorator'
import MyComponent from '../components/MyComponent/index.vue'

@Component({
    components: { MyComponent }
})
export default class App extends Vue {
}

import { Component, Prop, Model, Vue, Watch } from 'vue-property-decorator'
import CustomInput from './custom-input.vue'

@Component({
    components: { CustomInput }
})
export default class App extends Vue {
    text = 'init'
}

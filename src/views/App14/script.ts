import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    toggle = false
    get fill(): string {
        return this.toggle ? 'lightpink' : 'skyblue'
    }
}

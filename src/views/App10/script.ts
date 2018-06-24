import { Component, Vue } from 'vue-property-decorator'
import ComponentA from './component-a.vue'
// import ComponentB from 'component-a.vue'

@Component({
    components: {
        ComponentA,
    }
})
export default class App extends Vue {
}

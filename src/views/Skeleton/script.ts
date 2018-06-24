import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import * as _ from 'underscore'

interface MyEvent<T extends EventTarget> extends Event {
    target: T;
}

@Component
export default class App extends Vue {
}

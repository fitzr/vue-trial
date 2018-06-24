import Component, { mixins } from 'vue-class-component'
import HelloMix from './hello-mix'

@Component
export default class ComponentA extends mixins(HelloMix) {

}

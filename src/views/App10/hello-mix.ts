import Vue from 'vue'
import Component from 'vue-class-component'


@Component
export default class HelloMix extends Vue {
    hello() {
        console.log('hello from mixin!')
    }
}

import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import * as _ from 'underscore'

interface MyEvent<T extends EventTarget> extends Event {
    target: T;
}

type Item = {
    full_name: string,
}

type Topic = {
    value: string,
    name: string
}

@Component({
    directives: {
        example: {
            bind: () => { console.log('bind')},
            inserted: () => { console.log('inserted')},
            update: () => { console.log('update')},
            componentUpdated: () => { console.log('componentUpdated')},
            unbind: () => { console.log('unbind')},
        }
    }
})
export default class App extends Vue {
    list: Item[] = []
    topics = [
        { value: 'vue', name: 'Vue.js' },
        { value: 'jQuery', name: 'jQuery' },
    ]
    current: string = this.topics[0].value

    @Watch('current', { immediate: true })
    async onChangeTopic(val: string) {
        let response = await fetch(`https://api.github.com/search/repositories?q=topic:${val}`)
        let data = await response.json()
        this.list = data.items
    }
}

import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import _ from 'underscore'

type Item = {
    id: number,
    name: string,
    price: number,
}

@Component
export default class App extends Vue {
    order = false
    list: Item[] = [
        { id: 1, name: 'apple', price: 100 },
        { id: 2, name: 'banana', price: 200 },
        { id: 3, name: 'strawberry', price: 300 },
        { id: 4, name: 'melon', price: 500 },
    ]

    get sortedList() {
        return _.sortBy(this.list, (i: Item) => this.order ? -i.price : i.price )
    }
}

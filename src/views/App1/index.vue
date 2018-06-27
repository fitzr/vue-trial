<template>
  <div>
    <input v-model.number="budget"> 円以下に絞り込む
    <input v-model.number="limit"> 件表示
    <p class='red'>{{ matched.length }} 件中 {{ limited.length }} 件表示 </p>
    <button @click="toggleOrder">切替</button>
    <ul>
      <li v-for="item in limited" :key="item.id">
        {{ item.name }} {{ item.price | localeNum }} 円
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import * as _ from 'underscore'

interface MyEvent<T extends EventTarget> extends Event {
    target: T;
}

type Item = {
    id: number,
    name: string,
    price: number,
}

const enum Order { ASC, DESC }


// Vue.filter('localeNum', (val: number) => val.toLocaleString())

@Component({
    filters: {
        localeNum: (val: number) => val.toLocaleString()
    }
})
export default class App extends Vue {

    budget = 3000
    limit = 2
    list : Item[] = [
        { id: 1, name: 'apple', price: 1000 },
        { id: 2, name: 'banana', price: 2200 },
        { id: 3, name: 'strawberry', price: 4000 },
        { id: 4, name: 'orange', price: 3000 },
        { id: 5, name: 'melon', price: 5000 },
    ]
    order = Order.ASC

    created() {
        this.$watch(
            () => ({ list: this.list, length: this.list.length }),
            (val, oldVal) => {
                console.log('changed')
                console.log(`${oldVal.length} => ${val.length}`)
            })
    }

    toggleOrder() {
        this.order = this.order === Order.ASC ? Order.DESC : Order.ASC
    }
    get matched(): Item[] {
        return this.list.filter((i) => i.price <= this.budget )
    }
    get sorted(): Item[] {
        return _.sortBy(this.matched, (i) => this.order === Order.ASC ? i.price : -i.price )
    }
    get limited(): Item[] {
        return this.sorted.slice(0, this.limit)
    }
}
</script>

<style lang="sass" scoped>
.red
  color: #f00
</style>

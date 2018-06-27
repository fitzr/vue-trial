<template>
  <div>
    <button @click="order=!order">order</button>
    <transition-group name="list" tag="ul">
      <li v-for="item in sortedList" :key="item.id">
        {{ item.name }} ${{ item.price }}
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
</script>

<style lang="sass" scoped>
.list-enter-active, .list-leave-active
  transition: opacity 1s, transform 1s
.list-leave-active
  position: absolute
.list-move:not(.list-leave-active)
  transition: transform 1s
.list-enter, .list-leave-to
  opacity: 0
</style>

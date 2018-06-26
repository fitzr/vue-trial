<template>
  <div v-example>
    <select v-model="current">
      <option v-for="topic in topics" :value="topic.value">
        {{ topic.name }}
      </option>
    </select>
    <div v-for="item in list">{{ item.full_name }}</div>
  </div>
</template>

<script lang="ts">
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
</script>

<style>
  .red {
    color: #f00;
  }
  @keyframes cloak-in {
    0% { opacity: 0; }
  }
  #msg {
    animation: cloak-in 1s;
  }
  #msg[v-cloak] {
    opacity: 0;
  }
</style>

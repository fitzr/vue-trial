<template>
  <div>
    <button @click="current^=1">toggle</button>
    <div :is="component"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChildComponent from './child.vue'
import OtherComponent from './other.vue'

@Component({ components: { ChildComponent, OtherComponent } })
export default class App extends Vue {
    current = 0
    readonly componentTypes = [
        'child-component',
        'other-component',
    ]


    get component() {
        return this.componentTypes[this.current]
    }

}
</script>

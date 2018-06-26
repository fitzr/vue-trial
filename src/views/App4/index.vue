<template>
  <div>
    <p>{{ msg }}</p>
    <my-component val='component A' ref="child"></my-component>
    <my-component val='component B' @child-event="handleChild($event)"></my-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyComponent from './child.vue'


@Component({
    components: { MyComponent }
})
export default class App extends Vue {
    msg: string = 'init'

    handleChild(val: string) {
        this.msg = val
    }
}
</script>

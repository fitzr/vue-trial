<template>
  <div>
    <my-component :val='12' @click.native="parentsMethod('BAR')"></my-component>
    <my-component id="hoge" :val='msg' @handle-event="parentsMethod"></my-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyComponent from './child.vue'

@Component({
    components: { MyComponent }
})
export default class App extends Vue {
    msg = 999

    parentsMethod(msg: string) {
        alert('catch event !!' + msg)
    }
}
</script>

<style>
</style>

<template>
  <div>
    <child-component v-model='date'></child-component>
    <child-component v-model='date2'></child-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChildComponent from './child.vue'

@Component({
    components: { ChildComponent }
})
export default class App extends Vue {
    date = '20160101'
    date2 = '20160102'
}
</script>

<template>
  <child-component
          :name.sync='name'
          :hp.sync='hp'
  ></child-component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
    import ChildComponent from './child.vue'

@Component({
    components: { ChildComponent }
})
export default class App extends Vue {
    name = 'bar'
    hp = 100
}
</script>

<template>
  <child-component
          :name.sync='name'
          :hp.sync='hp'
  ></child-component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
    import ChildComponent from './child.vue'

// .sync can be used when we wanna add two or more v-model values.

@Component({
    components: { ChildComponent }
})
export default class App extends Vue {
    name = 'bar'
    hp = 100
}
</script>

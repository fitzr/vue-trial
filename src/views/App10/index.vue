<template>
  <div>HELLO
    <component-a></component-a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ComponentA from './component-a.vue'

@Component({
    components: {
        ComponentA,
    }
})
export default class App extends Vue {
}
</script>

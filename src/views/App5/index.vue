<template>
  <div>
    <child-component>
      <div slot="text_a" slot-scope="props">
        child value -> {{ props.text }}
      </div>
      <template slot="text_b">
        slot contents from parent
      </template>
    </child-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChildComponent from './child.vue'

@Component({
    components: { ChildComponent }
})
export default class App extends Vue {
}
</script>

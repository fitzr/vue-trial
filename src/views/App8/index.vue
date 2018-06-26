<template>
  <child-component name='bazz' :hp='100'></child-component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChildComponent from './child.ts'

@Component({
    components: { ChildComponent }
})
export default class App extends Vue {
}
</script>

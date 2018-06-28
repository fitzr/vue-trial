<template lang="pug">
  my-component
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement } from "vue";

@Component({
    components: {
        MyComponent: (resolve) => {
            setTimeout(() => { resolve({
                render(createElement: CreateElement) {
                    return createElement('div', 'Async Component')
                }
            })}, 1000)
        }
    }
})
export default class App extends Vue {
}
</script>

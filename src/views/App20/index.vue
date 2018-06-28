<template lang="pug">
  child
</template>

<script lang="ts">
import { Component, Inject, Provide, Vue} from 'vue-property-decorator'
import { CreateElement } from "vue"

@Component
class Child extends Vue {
    @Inject()
    msg: string

    @Inject()
    getMsg: () => string

    @Inject()
    message: string

    render(createElement: CreateElement) {
        return createElement('div', [
            createElement('div', this.msg),
            createElement('div', this.getMsg()),
            createElement('div', this.message)
        ])
    }
}

@Component({ components: { Child }})
export default class App extends Vue {
    @Provide()
    msg = 'injected message'

    @Provide()
    getMsg() {
        return 'injected method message'
    }

    @Provide()
    get message() {
        return 'injected getter message'
    }
}
</script>

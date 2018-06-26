<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ answer }}</p>
    <button @click='mod'>mod</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

let bus = new Vue({
    data: {
        msg: 'hogehoge'
    }
})

@Component
export default class MyComponent extends Vue {

    created() {
        bus.$on('bus-event', () => {
            this.answer = this.val
        })
    }

    @Prop({
        type: String,
        required: true,
    })
    val: string

    answer: string = 'inital'

    get message() {
        return bus.msg
    }

    mod() {
        bus.$emit('bus-event')
        this.$emit('child-event', 'CHILD')
    }
}
</script>

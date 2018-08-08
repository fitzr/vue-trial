<template lang="pug">
.app
  .test TEST
  .test {{ test }}
  button(@click='click') change
</template>

<script lang="ts">
import { Component, Vue, Mixins, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const mod = namespace('test')

@Component
class MyMixin extends Vue {
    @mod.Getter
    getByKey: Function

    @Watch('key', { immediate: true })
    onChangeKey (val) {
        this.mixinKey = val
    }

    @Watch('keys', { immediate: true })
    onChangeKeys (val) {
        console.log('hohohoho')
        console.log(val)
        this.mixinKey = val
    }

    mixinKey = null

    get test () {
        return this.getByKey(this.mixinKey)
    }
}

@Component
export default class App extends Mixins(MyMixin) {

    key = 'key1'

    @mod.Action
    load: Function

    created() {
        this.load()
    }

    click () {
        this.key = 'key2'
    }
}
</script>


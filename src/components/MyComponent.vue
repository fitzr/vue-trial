<template lang="pug">
  span {{ msg }}
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component
    export default class MyComponent extends Vue {
        @Prop({ default: 'bye!'})
        msg: string
    }
</script>

<style lang="sass" scoped>

</style>

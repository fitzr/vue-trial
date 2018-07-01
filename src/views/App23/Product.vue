<template lang="pug">
  .product
    h1 PRODUCT INFO
    p this page displays details of product ID.{{ id }}
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator'

    @Component
    export default class Product extends Vue {
        @Prop()
        id: number
    }
</script>

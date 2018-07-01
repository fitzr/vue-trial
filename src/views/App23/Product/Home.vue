<template lang="pug">
  .product
    h1 product detail
    dl.product-table
      dt name
      dd {{ detail.name }}
      dt price
      dd {{ detail.price }}
      dt content
      dd {{ detail.content }}
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import { namespace } from 'vuex-class'
    import { Product as ProductType } from '@/api/products'

    const product = namespace('product')

    @Component
    export default class Home extends Vue {
        @product.Getter
        detail: ProductType
    }
</script>

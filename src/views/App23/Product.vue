<template lang="pug">
  .product(v-if="item" key="product")
    h1 PRODUCT INFO
    dl.product-table
      dt name
      dd {{ item.name }}
      dt price
      dd {{ item.price }}
      dt content
      dd {{ item.content }}
  div(v-else key="loading") loading...
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
    import Database, { Product as ProductType } from '@/api/products'

    @Component
    export default class Product extends Vue {
        item: ProductType = null

        @Prop()
        id: number

        @Watch('id', { immediate: true })
        async onIdChanged(newId: number) {
            this.item = await Database.asyncFind(newId)
        }

    }
</script>

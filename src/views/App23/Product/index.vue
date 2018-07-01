<template lang="pug">
  .product(v-if="detail" key="product")
    h1 {{ detail.name }}
    nav.nav
      router-link(:to="{ name: 'product-home' }") product home
      |
      router-link(:to="{ name: 'product-review' }") product review
    router-view
  div(v-else key="loading") loading...
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
    import { namespace } from 'vuex-class'
    import { Product as ProductType } from '@/api/products'

    const product = namespace('product')

    @Component
    export default class Product extends Vue {
        @Prop()
        id: number

        @product.Getter
        detail: ProductType

        // item: ProductType | null = null
        // @Watch('id', { immediate: true })
        // async onIdChanged(newId: number) {
        //     this.item = await Database.asyncFind(newId)
        // }

    }
</script>

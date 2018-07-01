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
    import {Route} from "vue-router";

    const product = namespace('product')

    @Component({
        beforeRouteEnter(to, from, next) {
            console.log('component:beforeRouteEnter')
            next()
        },
        beforeRouteUpdate(to, from, next) {
            console.log('component:beforeRouteUpdate')
            next()
        },
        beforeRouteLeave(to, from, next) {
            console.log('component:beforeRouteLeave')
            next((vm: Product) => {})
        },
    })
    export default class Product extends Vue {
        @Prop()
        id: number

        @product.Getter
        detail: ProductType

        @Watch('id', { immediate: true })
        onIdChanged(newId: number) {
            this.load(newId)
        }

        @product.Action
        load: (id: number) => Promise<any>

        // item: ProductType | null = null
        // @Watch('id', { immediate: true })
        // async onIdChanged(newId: number) {
        //     this.item = await Database.asyncFind(newId)
        // }
    }
</script>

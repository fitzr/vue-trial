<template lang="pug">
  .products
    h1 product list
    ul
      li(v-for="{ id, name } in list" :key="id")
        router-link(:to="`/product/${id}`") {{ name }}
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator'
    import Database from '@/api/products'

    @Component
    export default class ProductList extends Vue {
        get list() {
            return Database.fetch()
        }
    }
</script>

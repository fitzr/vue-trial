<template lang="pug">
  .home
    h1 Home
    router-link(to='/product') product list
    br
    br
    router-link(:to='`/product/${id}`' tag='button') product
    br
    br
    router-link(:to="{ path: '/product', query: { id: 10 } }") product10
    br
    br
    router-link(:to="{ name: 'product', params: { id: 10 } }") product10
    br
    br
    button(@click="onClick") products
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class App extends Vue {
        onClick() {
            this.$router.push('/products')
        }
    }
</script>

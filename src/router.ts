import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/App23/Home.vue'
import Product from '@/views/App23/Product.vue'
import Products from '@/views/App23/Products.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/product',
            name: 'products',
            component: Products
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product,
            props: route => ({ id: Number(route.params.id) }),
        },
        {
            path: '/prod',
            redirect: {
                name: 'products'
            }
        }
    ]
})





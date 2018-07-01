import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/App23/Home.vue'
import ProductList from '@/views/App23/ProductList.vue'
import Product from '@/views/App23/Product/index.vue'
import ProductHome from '@/views/App23/Product/Home.vue'
import ProductReview from '@/views/App23/Product/Review.vue'
import ProductReviewDetail from '@/views/App23/Product/ReviewDetail.vue'

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
            name: 'product-list',
            component: ProductList
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product,
            props: route => ({ id: Number(route.params.id) }),
            children: [
                {
                    name: 'product-home',
                    path: '',
                    component: ProductHome,
                },
                {
                    name: 'product-review',
                    path: 'review',
                    component: ProductReview,
                },
                 {
                    name: 'review-detail',
                    path: 'review/:rid',
                    component: ProductReviewDetail,
                },
            ]
        },
        {
            path: '/prod',
            redirect: {
                name: 'products'
            }
        }
    ]
})





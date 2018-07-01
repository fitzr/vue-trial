import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/App23/Home.vue'
import ProductList from '@/views/App23/ProductList.vue'
import Product from '@/views/App23/Product/index.vue'
import ProductHome from '@/views/App23/Product/Home.vue'
import ProductReview from '@/views/App23/Product/Review.vue'
import ProductReviewDetail from '@/views/App23/Product/ReviewDetail.vue'

Vue.use(Router)

const router = new Router({
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
            component: ProductList,
            beforeEnter: (to, from, next) => {
                console.log('route:beforeEnter')
                next()
            }
        },
        {
            path: '/product/:id',
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

router.beforeEach((to, from, next) => {
    console.log('global:beforeEach')
    next()
})
router.beforeResolve((to, from, next) => {
    console.log('global:beforeResolve')
    next()
})
router.afterEach((to, from) => {
    console.log('global:afterEach')
})

export default router

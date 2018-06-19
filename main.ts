import Vue from 'vue'

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['apple', 'banana', 'strawberry' ],
        show: true,
    },
    methods: {
        handleClick: (ev: MouseEvent) => { alert(ev.target) }
    }
})


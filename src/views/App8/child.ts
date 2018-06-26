import Vue from 'vue'

const ChildComponent = Vue.extend({
    name: 'ChildComponent',
    functional: true,
    props: {
        name: String,
        hp: Number,
    },
    render: function(createElement, context) { return createElement('div', context.props.name) }

})

export default ChildComponent

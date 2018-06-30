import { shallowMount} from "@vue/test-utils"
import MyComponent from '@/components/MyComponent.vue'

function createVM(option?) {
    return shallowMount(MyComponent, option).vm
}

describe('MyComponent', () => {

    it('correctly sets the default message', () => {
        const vm = createVM()
        expect(vm.msg).toBe('bye!')
    })

    it('renders the correct message', () => {
        const vm = createVM()
        expect(vm.$el.textContent).toBe('bye!')
    })

    it('renders correctly with different props', () => {
        const vm = createVM({ propsData: { msg: 'Hello' }})
        expect(vm.$el.textContent).toBe('Hello')
    })
})

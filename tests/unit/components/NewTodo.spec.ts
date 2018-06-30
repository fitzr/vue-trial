import { shallowMount} from "@vue/test-utils"
import NewTodo from '@/components/NewTodo.vue'

describe('NewTodo.vue', () => {
    it('render input tag', () => {
        const wapper = shallowMount(NewTodo)
        expect(wapper.find('input.new').exists()).toBe(true)
    })
})

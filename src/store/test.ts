interface State {
    data: { [key: string]: string }
}

export default {
    namespaced: true,
    state: {
        data: {}
    },
    getters: {
        getByKey: (state: State) => (key: string) => state.data[key]
    },
    mutations: {
        set(state: State, { key, value }: any) {
            state.data = Object.assign({}, state.data, { [key] : value })
        },
        clear(state: State) {
            state.data = {}
        }
    },
    actions: {
        load({ commit }: any) {
            setTimeout(() => {
               commit('set', { key: 'key1', value: 'value1'})
               commit('set', { key: 'key2', value: 'value2'})
            }, 1000)
        },
        destroy({ commit }: any) {
            commit('clear')
        }
    }
}

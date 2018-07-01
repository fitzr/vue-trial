import Database from '../api/products'

interface State {
    detail: Object
}

export default {
    namespaced: true,
    state: {
        detail: {}
    },
    getters: {
        detail: (state: State) => state.detail
    },
    mutations: {
        set(state: State, { detail }: { detail: Object }) {
            state.detail = detail
        },
        clear(state: State) {
            state.detail = {}
        }
    },
    actions: {
        async load({ commit }: any, id: number) {
            commit('set', await Database.asyncFind(id))
        },
        destroy({ commit }:any) {
            commit('clear')
        }
    }
}

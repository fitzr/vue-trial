import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

type State = {
    message: string
}

const moduleA = {
    namespaced: true,
    state: {
        message: 'initial message'
    },
    getters: {
        message: (state: State, getters: any, rootState: State, rootGetters:any) => state.message
    },
    mutations: {
        setMessage: (state: State, payload: { message: string }) => {
            state.message = payload.message
        }
    },
    actions: {
        doUpdate({ commit, dispatch, getters, rootGetters }: any, message: string) {
            commit('setMessage', { message })
        }
    }
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        moduleA
    }
})

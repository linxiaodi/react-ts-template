// 添加状态
const ADD_NAV_TAG = 'ADD_NAV_TAG'
const CUT_NAV_TAG = 'CUT_NAV_TAG'
const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

import { RootDispatch, RootState } from '@/store'

interface TagsDec {
    key: string
    title: string
}
export interface GlobalStateDeclaration {
    tags: TagsDec[]
    isSiderCollapsed: boolean
}

const state: GlobalStateDeclaration = {
    tags: [],
    isSiderCollapsed: false,
}

export default {
    name: 'global',
    state,
    reducers: {
        [ADD_NAV_TAG]: (state: GlobalStateDeclaration, payload: TagsDec): GlobalStateDeclaration => {
            if (state.tags.findIndex(item => item.key === payload.key) === -1) state.tags.push(payload)
            return state
        },
        [CUT_NAV_TAG]: (state: GlobalStateDeclaration, payload: TagsDec): GlobalStateDeclaration => {
            const index = state.tags.findIndex(item => item.key === payload.key)
            if (index !== -1) state.tags.splice(index, 1)
            return state
        },
        [TOGGLE_COLLAPSED]: (state: GlobalStateDeclaration): GlobalStateDeclaration => {
            state.isSiderCollapsed = !state.isSiderCollapsed
            return state
        },
    },
    effects: (dispatch: RootDispatch) => ({
        // async incrementAsync(payload, rootState: RootState) {
        async incrementAsync() {
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve()
                }, 1000),
            )
            this.ADD_NAV_TAG()
        },
    }),
}

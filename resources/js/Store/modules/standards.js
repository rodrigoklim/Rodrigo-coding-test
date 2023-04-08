const state = () => ({
  items: []
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.items;
  }
}

// actions
const actions = {
  addItemToStandards ({ state, commit }, standard) {
    commit('addItemToStandards', { standard })
  },

  removeItemFromStandards ({ state, commit }, standard) {
    commit('removeItemFromStandards', { standard })
  },

  clearAllItemsFromStandards ({ state, commit }) {
    commit('clearAllItemsFromStandards')
  }
    
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
      state.items.unshift(standard)
    },

    removeItemFromStandards (state, { standard }) {
      state.items.splice(state.items.indexOf(standard), 1)
    },

    clearAllItemsFromStandards (state) {
      state.items = []
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

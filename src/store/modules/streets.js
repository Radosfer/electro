import api from '../../api/electro'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  loaded: false,
  current: null
}

// getters
const getters = {
  allStreets: state => state.all,
  loaded: state => state.loaded,
  current: state => state.current
}

// actions
const actions = {
  getAllStreets ({commit}) {
    api.getStreets(streets => {
      commit(types.RECEIVE_STREETS, {streets})
    })
  },
  selectStreet ({commit}, street) {
    commit(types.STREET_SELECT, {street})
    api.getHouses(street, houses => {
      console.log(houses)
    })
  },
  editStreet ({commit}, data) {
    for (let i in state.all) {
      if (state.all[i].id === data.street.id) {
        commit(types.STREET_LOADED)
        api.editStreet(state.all[i], data.value, street => {
          commit(types.STREET_EDITED, street)
        })
      }
    }
  },
  addStreet ({commit}, title) {
    commit(types.STREET_LOADED)
    api.addStreet(title, street => {
      commit(types.STREET_ADD, street)
    })
  }
}

// mutations
const mutations = {
  [types.STREET_LOADED] (state) {
    state.loaded = false
  },
  [types.RECEIVE_STREETS] (state, {streets}) {
    state.all = streets
    state.loaded = true
  },
  [types.STREET_SELECT] (state, {street}) {
    state.current = street
  },
  [types.STREET_EDITED] (state, street) {
    for (let i in state.all) {
      if (state.all[i].id === street.id) {
        state.all[i] = street
      }
    }
    state.loaded = true
  },
  [types.STREET_ADD] (state, street) {
    state.all.push(street)
    state.loaded = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

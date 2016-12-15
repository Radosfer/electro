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
    commit(types.STREET_EDITED, data)
  },
  addStreet ({commit}, title) {
    commit(types.STREET_ADD, title)
  }
}

// mutations
const mutations = {
  [types.RECEIVE_STREETS] (state, {streets}) {
    state.all = streets
    state.loaded = true
  },
  [types.STREET_SELECT] (state, {street}) {
    state.current = street
  },
  [types.STREET_EDITED] (state, data) {
    for (let i in state.all) {
      if (state.all[i].id === data.street.id) {
        state.all[i].title = data.value
      }
    }
    // state.current = data.street
  },
  [types.STREET_ADD] (state, title) {
    state.all.push({
      id: 20,
      title: title
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

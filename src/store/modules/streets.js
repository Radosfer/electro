import api from '../../api/electro'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  loaded: false
}

// getters
const getters = {
  allStreets: state => state.all,
  loaded: state => state.loaded
}

// actions
const actions = {
  getAllStreets ({commit}) {
    api.getStreets(streets => {
      commit(types.RECEIVE_STREETS, {streets})
    })
  },
  selectStreet ({commit}, street) {
    api.getHouses(street, houses => {
      console.log(houses)
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_STREETS] (state, {streets}) {
    state.all = streets
    state.loaded = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

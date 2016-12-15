/* global fetch */

import 'whatwg-fetch'

let _houses = []

export default {
  delay (ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    })
  },
  getStreets (cb) {
    fetch('/static/streets.json')
      .then((response) => response.json())
      .then((json) => cb(json))
      .catch((ex) => console.log('street parsing failed', ex))
  },
  addStreet (title, cb) {
    this.delay(1000)
      .then(() => cb({
        id: 20,
        title: title
      }))
      .catch((ex) => console.log('street adding failed', ex))
  },
  editStreet (street, title, cb) {
    this.delay(1000)
      .then(() => cb({
        id: street.id,
        title: title
      }))
      .catch((ex) => console.log('street edit failed', ex))
  },
  filterHouses (json, street, cb) {
    var houses = json.filter((house) => house.street_id === street.id)
    return cb(houses)
  },
  getHouses (street, cb) {
    if (_houses.length > 0) {
      return this.filterHouses(_houses, street, cb)
    }
    fetch('/static/houses.json')
      .then((response) => response.json())
      .then((json) => {
        _houses = json
        return this.filterHouses(json, street, cb)
      }).catch((ex) => console.log('houses parsing failed', ex))
  }
}

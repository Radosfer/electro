/**
 * Mocking client-server processing
 */
const _streets = [
  {'id': 1, 'title': '1st Avenue'},
  {'id': 2, 'title': '2st Avenue'},
  {'id': 3, 'title': '3st Avenue'},
  {'id': 4, 'title': '4st Avenue'}
]

const _houses = [
  {'id': 1, 'streetId': 1, 'title': 1},
  {'id': 2, 'streetId': 1, 'title': 2},
  {'id': 3, 'streetId': 1, 'title': 3},
  {'id': 4, 'streetId': 2, 'title': 4},
  {'id': 5, 'streetId': 1, 'title': 5},
  {'id': 6, 'streetId': 2, 'title': 6},
  {'id': 7, 'streetId': 1, 'title': 7},
  {'id': 8, 'streetId': 3, 'title': 8},
  {'id': 9, 'streetId': 1, 'title': 9},
  {'id': 10, 'streetId': 4, 'title': 10}
]

export default {
  getStreets (cb) {
    setTimeout(() => cb(_streets), 2000)
  },
  getHouses (street, cb) {
    var houses = _houses.filter(function (house) {
      return house.streetId === street.id
    })
    setTimeout(() => cb(houses), 2000)
  }
}

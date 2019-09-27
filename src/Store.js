export default class Store {
  constructor (reducer, preloadedState) {
    this._reducer = reducer
    this._state = preloadedState
    this._listeners = []
  }

  subscribe (listener) {
    this._listeners.push(listener)
  }

  getState () {
    return this._state
  }

  _notify () {
    this._listeners.forEach(listener => listener(this.getState()))
  }

  dispatch (action) {
    this._state = this._reducer(action)
    this._notify()
  }
}

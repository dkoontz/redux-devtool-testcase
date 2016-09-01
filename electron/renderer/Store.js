const { compose, createStore, combineReducers } = require('redux');
const { reducer } = require('./TestReducer');

const reducers = {
  test: reducer
};

module.exports = createStore(
  combineReducers(reducers),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

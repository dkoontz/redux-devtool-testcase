const { fp } = require('lodash/fp');
const { set } = require('./Utils');

const init = () => (
  {
    a: { b: 'original text' },
    c: [1, 2, 3],
  }
);

function reducer(state = init(), message) {
  switch(message.type) {
    case 'ChangedA':
      return set(state, 'a', message.value)
    case 'ChangedB':
      return set(state, 'a.b', message.value);
    case 'ChangedC':
      return set(state, 'c', message.value);
    default:
      return state;
  }
}

module.exports = {
  init,
  reducer
}

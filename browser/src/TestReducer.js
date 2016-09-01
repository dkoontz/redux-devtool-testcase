const init = () => (
  {
    a: { b: 'original text' },
    c: [1, 2, 3],
  }
);

function reducer(state = init(), message) {
  switch(message.type) {
    case 'ChangedA':
            return Object.assign({}, state, { a: message.value });
    case 'ChangedB':
            return Object.assign({}, state, { a: Object.assign({}, state.a, { b: message.value }) });
    case 'ChangedC':
            return Object.assign({}, state, { c: message.value });
    default:
      return state;
  }
}

module.exports = {
  init,
  reducer
}

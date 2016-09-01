const fp = require('lodash/fp');

function set(container, path, value) {
  return fp.setWith(fp.clone, path, value, fp.clone(container));
}

module.exports = {
  set,
};

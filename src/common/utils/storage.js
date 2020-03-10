function localStorage() {
  return window.localStorage;
}

function read(key) {
  return localStorage().getItem(key);
}

function write(key, data) {
  return localStorage().setItem(key, data);
}

function each(fn) {
  // eslint-disable-next-line no-plusplus
  for (let i = localStorage().length - 1; i >= 0; i--) {
    const key = localStorage().key(i);
    fn(read(key), key);
  }
}

function remove(key) {
  return localStorage().removeItem(key);
}

function clearAll() {
  return localStorage().clear();
}

export default {
  read,
  write,
  each,
  remove,
  clearAll,
};

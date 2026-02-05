class map extends Map {
  insert(key, value) {
    this.set(key, value);
  }

  erase(key) {
    this.delete(key);
  }

  count(key) {
    return this.has(key) ? 1 : 0;
  }

  empty() {
    return this.size === 0;
  }

  find(key) {
    return this.has(key) ? this.get(key) : undefined;
  }
}

class set extends Set {
  insert(value) {
    this.add(value);
  }

  erase(value) {
    this.delete(value);
  }

  count(value) {
    return this.has(value) ? 1 : 0;
  }

  empty() {
    return this.size === 0;
  }

  find(value) {
    return this.has(value) ? value : undefined;
  }
}

module.exports = { map, set };

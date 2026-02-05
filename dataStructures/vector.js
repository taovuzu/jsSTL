class vector {
  #arr;
  constructor(initial = []) {
    this.#arr = [...initial];
  }

  push_back(val) {
    this.#arr.push(val);
  }

  pop_back() {
    this.#arr.pop();
  }

  size() {
    return this.#arr.length;
  }

  empty() {
    return this.#arr.length === 0;
  }

  front() {
    if (this.empty()) return undefined;
    return this.#arr[0];
  }

  back() {
    if (this.empty()) return undefined;
    return this.#arr[this.#arr.length - 1];
  }

  at(index) {
    return this.#arr[index];
  }

  clear() {
    this.#arr = [];
  }

  [Symbol.iterator]() {
    return this.#arr[Symbol.iterator]();
  }
}

module.exports = vector;

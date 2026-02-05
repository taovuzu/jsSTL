class stack {
    #arr;
    constructor() {
        this.#arr = [];
    }

    push(x) {
        this.#arr.push(x);
    }

    pop() {
        this.#arr.pop();
    }

    top() {
        if (this.#arr.length == 0) return undefined;
        return this.#arr[this.#arr.length - 1];
    }

    size() {
        return this.#arr.length;
    }

    empty() {
        return this.#arr.length === 0;
    }
}

module.exports = stack;
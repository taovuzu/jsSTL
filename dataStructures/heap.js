class priority_queue {
    #arr;
    #comparator;

    constructor(comparator = (a, b) => a > b) {
        this.#arr = [];
        this.#comparator = comparator;
    }

    swap(i, j) {
        let temp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = temp;
    }

    upheapify(idx) {
        while (idx > 0) {
            let pi = Math.floor((idx - 1) / 2);
            if (this.#comparator(this.#arr[idx], this.#arr[pi])) {
                this.swap(idx, pi);
            } else {
                break;
            }
            idx = pi;
        }
    }

    downheapify(idx) {
        while (idx < this.#arr.length) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let result = idx;

            if (left < this.#arr.length && this.#comparator(this.#arr[left], this.#arr[result])) {
                result = left;
            }
            if (right < this.#arr.length && this.#comparator(this.#arr[right], this.#arr[result])) {
                result = right;
            }

            if (idx == result) {
                break;
            }
            this.swap(idx, result);
            idx = result;
        }
    }

    push(data) {
        this.#arr.push(data);
        this.upheapify(this.#arr.length - 1);
    }

    top() {
        if (this.#arr.length > 0) {
            return this.#arr[0];
        } else {
            return undefined;
        }
    }

    pop() {
        if (this.empty()) return;
        this.swap(0, this.#arr.length - 1);
        this.#arr.pop();
        this.downheapify(0);
    }

    size() {
        return this.#arr.length;
    }

    empty() {
        return this.#arr.length === 0;
    }
}

module.exports = priority_queue;
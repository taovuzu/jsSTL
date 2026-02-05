class Heap {
    #arr;
    constructor(cmp, array) {
        this.#arr = array;
        this.comparator = cmp;
        this.limit = array.length - 1;
        this.buildHeap();
    }
    buildHeap() {
        for (let i = this.#arr.length - 1; i >= 0; i--) {
            this.downheapify(i);
        }
    }
    swap(i, j) {
        let temp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = temp;
    }
    upheapify(idx) {
        while (idx > 0) {
            let pi = Math.floor((idx - 1) / 2);
            if (this.comparator(this.#arr[idx], this.#arr[pi])) {
                this.swap(idx, pi);
            } else {
                break;
            }
            idx = pi;
        }
    }
    downheapify(idx) {
        while (idx < this.limit) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let result = idx;
            if (left <= this.limit && this.comparator(this.#arr[left], this.#arr[result])) {
                result = left;
            }
            if (right <= this.limit && this.comparator(this.#arr[right], this.#arr[result])) {
                result = right;
            }
            if (idx == result) {
                break;
            }
            this.swap(idx, result);
            idx = result;
        }
    }
    insert(data) {
        this.#arr.push(data);
        this.upheapify(this.#arr.length - 1);
    }
    get() {
        if (this.#arr.length > 0) {
            return this.#arr[0];
        } else {
            return undefined;
        }
    }
    remove() {
        this.swap(0, this.limit);
        this.limit--;
        this.downheapify(0);
    }
    display() {
        console.log(this.#arr);
    }
    getArray() {
        return this.#arr;
    }
}

function heapsort(arr) {
    let mh = new Heap((a, b) => a > b, arr);
    let count = 0;
    while (count < arr.length) {
        count++;
        mh.remove();
    }
    return mh.getArray();
}

module.exports = heapsort;
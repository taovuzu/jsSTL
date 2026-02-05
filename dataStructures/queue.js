function createNode(value) {
    return {
        data: value,
        next: null
    };
}
class queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    push(x) {
        let newNode = createNode(x);
        if (this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this._size++;
    }

    pop() {
        if (this.head == null) return;
        let nextNode = this.head.next;
        this.head.next = null;
        this.head = nextNode;
        if (this.head == null) {
            this.tail = null;
        }
        this._size--;
    }

    front() {
        if (this.head == null) return undefined;
        return this.head.data;
    }

    back() {
        if (this.head == null) return undefined;
        return this.tail.data;
    }

    empty() {
        return this.head == null;
    }

    size() {
        return this._size;
    }
}

module.exports = queue;
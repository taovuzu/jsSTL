class deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  _createNode(val) {
    return { data: val, next: null, prev: null };
  }

  push_back(val) {
    const newNode = this._createNode(val);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this._size++;
  }

  push_front(val) {
    const newNode = this._createNode(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this._size++;
  }

  pop_back() {
    if (!this.tail) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this._size--;
  }

  pop_front() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this._size--;
  }

  front() {
    return this.head ? this.head.data : undefined;
  }

  back() {
    return this.tail ? this.tail.data : undefined;
  }

  size() {
    return this._size;
  }

  empty() {
    return this._size === 0;
  }

  clear() {
    this.head = this.tail = null;
    this._size = 0;
  }
}

module.exports = deque;

# jsSTL

**Standard Template Library (STL) for JavaScript**

Bring the power and familiarity of C++ STL data structures and algorithms to likely your JavaScript/TypeScript projects. Ideal for competitive programming, technical interviews, and efficient data management.

## Features

- **C++ Like API**: Methods and class names strictly follow C++ STL conventions (e.g., `push_back`, `pop`, `top`, `size`, `empty`, `lower_bound`).
- **Comprehensive Collection**: Includes `vector`, `stack`, `queue`, `priority_queue`, `list` (Doubly Linked List), `deque`, `map`, `set`, and `pair`.
- **Algorithms**: Standard algorithms like `sort`, `binary_search`, `lower_bound`, `upper_bound`, and more.
- **Zero Dependencies**: Lightweight and efficient.

## Installation

```bash
npm install jsSTL
```

## Quick Start

```javascript
const { vector, priority_queue, sort, lower_bound } = require('jsSTL');

// Vector Example
let v = new vector();
v.push_back(10);
v.push_back(20);
console.log(v.back()); // 20
v.pop_back();

// Algorithm Example
let arr = [1, 3, 5, 7, 9];
let idx = lower_bound(arr, 6); 
console.log(idx); // 3 (index of first element >= 6)
```

## Data Structures

All data structures are exported in **lowercase** to match C++ STL.

### `vector`
Dynamic array implementation.
```javascript
const { vector } = require('jsSTL');

let v = new vector();
v.push_back(1);
v.push_back(2);
console.log(v.size());   // 2
console.log(v.empty());  // false
console.log(v.front());  // 1
console.log(v.back());   // 2
v.pop_back();
```

### `stack`
LIFO (Last In First Out) container.
```javascript
const { stack } = require('jsSTL');

let s = new stack();
s.push(10);
s.push(20);
console.log(s.top()); // 20
s.pop();
console.log(s.size()); // 1
```

### `queue`
FIFO (First In First Out) container.
```javascript
const { queue } = require('jsSTL');

let q = new queue();
q.push(10);
q.push(20);
console.log(q.front()); // 10
q.pop();
```

### `priority_queue`
Binary Heap implementation. Defaults to Max Heap.
```javascript
const { priority_queue } = require('jsSTL');

// Max Heap (Default)
let d = new priority_queue();
d.push(10);
d.push(30);
d.push(20);
console.log(d.top()); // 30
d.pop();

// Min Heap (Custom Comparator)
let min_pq = new priority_queue((a, b) => a < b);
min_pq.push(10);
min_pq.push(30);
min_pq.push(20);
console.log(min_pq.top()); // 10
```

### `map`
Wrapper around JS Map with C++ naming.
```javascript
const { map } = require('jsSTL');

let m = new map();
m.insert("key", 100);
if (m.count("key")) {
    console.log(m.find("key")); // 100
}
m.erase("key");
console.log(m.empty()); // true
```

### `set`
Wrapper around JS Set with C++ naming.
```javascript
const { set } = require('jsSTL');

let s = new set();
s.insert(5);
s.insert(5); // Duplicate ignored
console.log(s.count(5)); // 1
s.erase(5);
```

### Other Structures
- **`deque`**: Double-ended queue.
- **`list`**: Doubly linked list.
- **`pair`**: Simple `{first, second}` container.

## Algorithms

Standard algorithms are available as free functions.

```javascript
const { 
    sort, binary_search, lower_bound, upper_bound, 
    reverse, min, max, swap 
} = require('jsSTL');

let arr = [4, 2, 5, 1, 3];

// Sort
sort(arr); // [1, 2, 3, 4, 5]

// Binary Search
if (binary_search(arr, 3)) {
    console.log("Found");
}

// Lower/Upper Bound
// arr is [1, 2, 3, 4, 5]
let lb = lower_bound(arr, 3); // index 2 (first element >= 3)
let ub = upper_bound(arr, 3); // index 3 (first element > 3)

// Reverse
reverse(arr); // [5, 4, 3, 2, 1]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Distributed under the MIT License. See `LICENSE` for more information.
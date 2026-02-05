const BinarySearch = require("./binarysearch");
const BubbleSort = require('./bubblesort');
const CountingSort = require("./countingsort");
const HeapSort = require('./heapsort');
const InsertionSort = require("./insertionsort");
const MergeSort = require('./mergesort');
const QuickSort = require('./quicksort');
const SelectionSort = require('./selectionsort');

module.exports = {
    sort: (arr) => arr.sort((a, b) => a - b),
    stable_sort: (arr) => arr.sort((a, b) => a - b),
    reverse: (arr) => arr.reverse(),
    binary_search: (arr, val) => BinarySearch(arr, val) !== -1,
    lower_bound: (arr, val) => {
        let l = 0, r = arr.length;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] < val) l = mid + 1;
            else r = mid;
        }
        return l;
    },
    upper_bound: (arr, val) => {
        let l = 0, r = arr.length;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] <= val) l = mid + 1;
            else r = mid;
        }
        return l;
    },
    min: (a, b) => Math.min(a, b),
    max: (a, b) => Math.max(a, b),
    swap: (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    },
    binary_search_impl: BinarySearch,
    bubble_sort: BubbleSort,
    counting_sort: CountingSort,
    heap_sort: HeapSort,
    insertion_sort: InsertionSort,
    merge_sort: MergeSort,
    quick_sort: QuickSort,
    selection_sort: SelectionSort
}
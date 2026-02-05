function merge(arr, start, mid, end) {
    let m1 = mid - start + 1;
    let m2 = end - mid;
    let A = Array(m1);
    let B = Array(m2);

    for (let i = 0; i < m1; i++) {
        A[i] = arr[start + i];
    }
    for (let j = 0; j < m2; j++) {
        B[j] = arr[mid + j + 1];
    }

    let n = A.length;
    let m = B.length;
    let i = 0, j = 0, k = start;

    while (i < n && j < m) {
        if (A[i] <= B[j]) {
            arr[k] = A[i];
            i++;
            k++;
        } else {
            arr[k] = B[j];
            j++;
            k++;
        }
    }

    while (j < m) {
        arr[k] = B[j];
        j++;
        k++;
    }

    while (i < n) {
        arr[k] = A[i];
        i++;
        k++;
    }
}

function mergesort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let mid = Math.floor((start + end) / 2);
    mergesort(arr, start, mid);
    mergesort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}

module.exports = mergesort;
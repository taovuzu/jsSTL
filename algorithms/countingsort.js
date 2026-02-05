function counting_sort(arr) {
    let maxEl = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        maxEl = Math.max(maxEl, arr[i]);
    }
    let freq = Array(maxEl+1).fill(0);
    for(let i = 0; i < arr.length; i++) {
        let currElement = arr[i];
        freq[currElement]++;
    }
    for(let i = 1; i < freq.length; i++) {
        freq[i] = freq[i] + freq[i-1];
    }
    let output = Array(arr.length);
    for(let i = arr.length - 1; i >= 0; i--) {
        output[freq[arr[i]] - 1] = arr[i];
        freq[arr[i]]--;
    }
    return output;
}

module.exports=counting_sort;
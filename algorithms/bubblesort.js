function bubblesort(arr) {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) break;
    }
}


module.exports=bubblesort;
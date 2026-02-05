var binarysearch = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    while(lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
};

module.exports=binarysearch;
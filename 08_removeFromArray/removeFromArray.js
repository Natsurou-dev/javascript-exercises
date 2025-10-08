function removeFromArray(arr, ...exclusions) {
    let ans = [];
    for (let i=0; i<arr.length; i++) {
        if (!(exclusions.includes(arr[i]))) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

// Do not edit below this line
module.exports = removeFromArray;

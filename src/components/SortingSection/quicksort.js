let arr = [2,1,3,5,2,2];

const quickSort = (low, high) => {
    if (low < high) {
        let pi = partition(arr.slice(0), low, high);
        quickSort(low, pi - 1);
        quickSort(pi + 1, high);
    }
};

const partition = (cols, left, right) => {
    const pivot = cols[right];
    let i = left - 1;
    for (let j=left; j < right; j++) {
        if (cols[j] < pivot) {
            i++;
            [cols[i], cols[j]] = [cols[j], cols[i]];
        }
    }
    [cols[i+1], cols[right]] = [cols[right], cols[i+1]];
    arr = cols;
    return i+1;
};
console.log(arr);
quickSort(0, arr.length -1);
console.log(arr);
export const quickSort = async (arr, start, end, animation=[]) => {
    if (start < end) {
        const pi = partition(arr, start, end, animation);
        await quickSort(arr, start, pi - 1, animation);
        await quickSort(arr, pi + 1, end, animation);
    }
    return animation;
}

const partition = (arr, start, end, animation) => {
    let pivotIdx   = start;
    const pivotVal = arr[end].props.lineHeight;
    for (let i=start; i < end; i++) {
        if (arr[i].props.lineHeight < pivotVal) {
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
            animation.push({
                animation: [...arr],
                swap: [i, pivotIdx++]
            });
        }
    }
    [arr[pivotIdx], arr[end]] = [arr[end], arr[pivotIdx]];
    animation.push({
        animation: [...arr],
        swap: [pivotIdx, end]
    });
    return pivotIdx;
};

export const bubbleSort = async (arr, animation=[]) => {
    for (let i=0; i<arr.length; i++) {
        let swapped = false;
        for (let j=1; j<arr.length-i; j++) {
            if (arr[j-1].props.lineHeight > arr[j].props.lineHeight) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
                animation.push({
                    animation: [...arr],
                    swap: [j, j-1]
                });
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return animation;
}

export const mergeSort = arr => {
    const animations = [];
    mergeSortHelper(arr, 0, arr.length - 1, animations);
    return animations;
}

export const mergeSortHelper = (arr, start, end, mem) => {
    if (end === start) return [arr.slice(start, end + 1), start, end];
    const mid = Math.floor((end + start + 1) /2);
    return merge( arr, mergeSortHelper(arr, start, mid - 1, mem), mergeSortHelper(arr, mid, end,  mem), mem );
}

const merge = (arr, left, right, animation) => {
    const ans = [];
    const leftArr  = left[0];
    const rightArr = right[0];
    const lowerLeftBound  = left[1];
    const upperRightBound = right[2];
    let p1 = 0;
    let p2 = 0;

    while (p1 < leftArr.length && p2 < rightArr.length) {
        (leftArr[p1].props.lineHeight <= rightArr[p2].props.lineHeight)
        ? ans.push(leftArr[p1++])
        : ans.push(rightArr[p2++]);
    }

    (p1 < leftArr.length) ? ans.push(...leftArr.slice(p1)) : ans.push(...rightArr.slice(p2));

    for (let i=lowerLeftBound; i <= upperRightBound; i++) {
        arr[i] = ans[i-lowerLeftBound];
        animation.push({
            animation: [...arr]
        });
    }
    return [ans, lowerLeftBound, upperRightBound];
}
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
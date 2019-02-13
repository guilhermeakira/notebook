function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const left = []
    const right = []
    const pivot = arr[0]

    // i = 1 to not include the pivot
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}

let arr = [23,12,56,78,54,32,89,95,23,54,76]
console.log(quickSort(arr))

function merge(left, right) {
    let result = []

    while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift() : right.shift())
    }

    while (left.length) {
        result.push(left.shift())
    }

    while (right.length) {
        result.push(right.shift())
    }
    return result
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

let arr = [4,5,2,8,7,5,25,87,1]
console.log(mergeSort(arr))
function bubbleSort(arr) {
    let len = arr.length
    do {
        for (let i = 0; i < len -1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            }
        }
    } while (len--)

    return arr
}

function swap(arr, indexA, indexB) {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

let arr = [45,44,67,22,41,11,5,123,1,2,3,4,5]
console.log(bubbleSort(arr))
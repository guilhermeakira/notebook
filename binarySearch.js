function binarySearchRecursive(arr, value, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return false
    }

    let midIndex = Math.round((leftIndex + rightIndex) / 2)

    if (arr[midIndex] === value) {
        return true
    } else if (value < arr[midIndex]) {
        return binarySearchRecursive(arr, value, leftIndex, midIndex - 1)
    } else {
        return binarySearchRecursive(arr, value, midIndex + 1, rightIndex)
    }
}

function binarySearchIterative(arr, value) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex <= rightIndex) {
        let midIndex = Math.round((leftIndex + rightIndex) / 2)
    
        if (arr[midIndex] === value) {
            return true
        } else if (value < arr[midIndex]) {
            rightIndex = midIndex - 1
        } else {
            leftIndex = midIndex + 1
        }
    }
    return false
}

let arr = [1,2,4,5,7,8,9,12,15,20]
let value = 21
console.log(binarySearchRecursive(arr, value, 0, arr.length - 1))
console.log(binarySearchIterative(arr, value))

function missingNumber(array, n){
    let sum = n * (n + 1) / 2
    let total = array.reduce((a,b) => a + b)

    return sum - total
}

missingNumber([1,2,3,5], 5) //4
function adjacentElementsProduct(arr){

    var products = []

    arr.reduce((prevValue, currentValue) => {
        products.push(prevValue * currentValue)
        return currentValue;
    });
        
    return Math.max(...products);

}


adjacentElementsProduct([3, 6, -2, -5, 7, 3]);
function matrixElementsSum(matrix) {

    var elementsSum = 0;
    var zeroIndexes = [];

    for(i = 0; i < matrix.length; i++){
        for(j = 0; j < matrix[0].length; j++){

            if(matrix[i][j] == 0){
                zeroIndexes.push(j);
            }

            if(zeroIndexes.indexOf(j) > -1){
                elementsSum += 0;
            } else{
                elementsSum += matrix[i][j];
            }

        }
    }

    return elementsSum;

}

matrixElementsSum([[0,1,1,2], [0,5,0,0], [2,0,3,3]]);
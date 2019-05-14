<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <script>
        matriz = [[0,1,1,2], [0,5,0,0], [2,0,3,3]];
        // matriz = [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]];
        
        function matrixElementsSum(matrix) {
            console.log(matrix);
             
            var elementsSum = 0;
            var zeroIndexes = [];

            for(i = 0; i < matrix.length; i++){
                for(j = 0; j < matrix[0].length; j++){
                    console.log(matrix[i][j]);

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

            console.log('elementsSum');
            console.log(elementsSum);
            console.log('zeroIndexes');
            console.log(zeroIndexes);

        }
        


        matrixElementsSum(matriz)

    </script>
</body>
</html>
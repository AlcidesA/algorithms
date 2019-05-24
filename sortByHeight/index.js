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
        
        function sortByHeight(a) {
            i = 0

            return a.map(v => v<0 ? v : b[i++], b = a.filter(v => v >= 0).sort((a,b) => a-b))
        }


        function sortByHeight(arr) {
            var indexNotMove = [];

            //pegando os index dos -1
            for (i = 0; i < arr.length; i++) {
                if(arr[i] == -1){
                    indexNotMove.push(i);
                }                
            }

            var filtradoOrdenado = arr.filter(item => item != -1).sort(( a, b ) => a - b );

            for (i = 0; i < indexNotMove.length; i++) {
                filtradoOrdenado.splice(indexNotMove[i], 0, -1);
            }

            console.log(indexNotMove);
            console.log(filtradoOrdenado);

            // return 
        }

        console.log(sortByHeight([4, 2, 9, -1, 11, 2, 16]));

    </script>
</body>
</html>
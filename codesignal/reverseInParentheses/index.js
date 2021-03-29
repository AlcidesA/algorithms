function reverseInParentheses(inputString){
    var arr =  inputString.split("");
    var countParentheses = arr.filter(x => x == "(").length;

    for(i = 0; i < countParentheses; i++) {

        let cutArray = arr.slice(0, arr.indexOf(")") );

        let strReverse = cutArray.slice( cutArray.lastIndexOf("(") + 1 ).reverse();

        let begin = cutArray.lastIndexOf("("); 
        let end = arr.indexOf(")"); 

        arr.splice(begin, (end - begin) + 1 , ...strReverse);

    }   

    return arr.join("");                      

}
function isLucky(n) {
    var nArr = n.toString().split("");

    var firstHalf = nArr.splice(0, nArr.length / 2);
    
    firstHalfSum = firstHalf.reduce((prev,current) => {
        return parseInt(prev) + parseInt(current);
    });

    secondHalfSum = nArr.reduce((prev,current) => {
        return parseInt(prev) + parseInt(current);
    });

    return firstHalfSum == secondHalfSum ? true : false;
}   

isLucky(1230);
function arrayChange(array) {
    let changes = 0;

    for(let x = 1; x < array.length; x++){
        while(array[x] <= array[x - 1]){
            array[x] += 1;
            changes++;
        }

    }

    return changes;
}
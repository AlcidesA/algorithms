function shapeArea(n) {
    var totalShapes = 0;
    var lineShapes = 0;

    for (let i = 0; i < (n * 2) - 1; i++) {
        
        if(i == 0){
            lineShapes = 1;
        } else {
            if(i < n ){
                lineShapes += 2;
            } else {
                lineShapes -= 2;
            }
        }

        return totalShapes += lineShapes;

    }
}

shapeArea(3);
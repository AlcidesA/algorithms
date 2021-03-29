function almostIncreasingSequence(sequence) {

    for(i = 0; i < sequence.length; i++){
        var stillOrdered = true;
        var prevValue = Math.min.apply(Math, sequence);

        for(j = 0; j < sequence.length; j++){
            if(i != j){

                if(prevValue > sequence[j] || prevValue == sequence[j])
                    stillOrdered = false;

                prevValue = sequence[j];

            }
        }

        if(stillOrdered)
            return stillOrdered

    }

    return stillOrdered;

}

almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45])
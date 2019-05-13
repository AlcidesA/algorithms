function makeArrayConsecutive(statues) {
    statues.sort((a,b) => a - b);

    return ((statues[statues.length - 1] - statues[0]) - statues.length) + 1;          
}

makeArrayConsecutive([4, 5, 6, 8]);
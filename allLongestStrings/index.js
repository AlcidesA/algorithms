function allLongestStrings(arr) {
    
    var longestLength = arr.sort((a,b) => b.length - a.length )[0].length;
    
    var longestStrings = arr.filter(item => {
        return item.length == longestLength;
    })

    return longestStrings;

}

allLongestStrings(["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]);
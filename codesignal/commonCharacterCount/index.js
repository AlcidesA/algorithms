function commonCharacterCount(s1, s2) {

    var s1Arr = s1.split("");
    var s2Arr = s2.split("");
    var commonChar = 0;

    for(i = 0; i < s1.length; i++){
        var charIndex = s2Arr.indexOf(s1Arr[i]);

        if(charIndex > -1) {
            s2Arr.splice(charIndex, 1);
            commonChar++;
        }
    }

    return commonChar;
}
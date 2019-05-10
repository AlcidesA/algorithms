function validatePalindrome(str){

    for(i = 0; i < str.length; i ++)
        if( str.charAt(i) != str.charAt((str.length - i) - 1) )
            return false;

    return true;

}

validatePalindrome("aba");

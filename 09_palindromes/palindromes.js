const palindromes = function (string) {
    let arrayValues = string.split('');
    let reverseArrayValues = arrayValues.reverse();
    let reverseString = reverseArrayValues.join('');

    if (string === reverseString){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

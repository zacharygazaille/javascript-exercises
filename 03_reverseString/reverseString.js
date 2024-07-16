const reverseString = function(word) {
    const string = [];
    for (let i = word.length - 1; i >= 0; i--) {
        string.push(word.charAt(i));
    }
    let finalWord = "";
    for (let i = 0; i < string.length; i++) {
        finalWord += string[i];
    }
    return (finalWord);
};

// Do not edit below this line
module.exports = reverseString;

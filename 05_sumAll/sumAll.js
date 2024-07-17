const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
        return('ERROR');
    }
    if (num2 < num1) {
        let tempNum = num2;
        num2 = num1;
        num1 = tempNum;
    }
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return (sum);
};

// Do not edit below this line
module.exports = sumAll;

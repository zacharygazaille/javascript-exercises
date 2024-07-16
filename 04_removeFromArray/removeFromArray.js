const removeFromArray = function(numsArray, ...args) {
    const tempArray = [];
    numsArray.forEach((item) => {
        if (!args.includes(item)) {
            tempArray.push(item);
        }
    });
    return tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;

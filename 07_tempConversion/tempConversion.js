const convertToCelsius = function(temp) {
  let newTemp = (temp - 32) * 5 / 9;
  newTemp *= 10;
  newTemp = Math.round(newTemp);
  newTemp /= 10;
  return newTemp;
};

const convertToFahrenheit = function(temp) {
  let newTemp = temp * 9 / 5 + 32;
  newTemp *= 10;
  newTemp = Math.round(newTemp);
  newTemp /= 10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

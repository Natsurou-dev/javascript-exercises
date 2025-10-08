const convertToCelsius = function (fDeg) {
  cDeg = (fDeg - 32) * 5 / 9;
  cDeg = cDeg.toFixed(1);
  return parseFloat(cDeg);
};

const convertToFahrenheit = function (cDeg) {
  fDeg = cDeg * 9 / 5 + 32;
  fDeg = fDeg.toFixed(1);
  return parseFloat(fDeg);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

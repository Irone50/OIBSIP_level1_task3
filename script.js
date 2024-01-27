const inputTemp = document.getElementById("inputTemp");
const tempUnit = document.getElementById("tempUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const enteredTemp = parseFloat(inputTemp.value);
  const selectedUnit = tempUnit.value;
  let convertedTemp;

  switch (selectedUnit) {
    case "celsius":
      convertedTemp = toCelsius(enteredTemp);
      break;
    case "fahrenheit":
      convertedTemp = toFahrenheit(enteredTemp);
      break;
    case "kelvin":
      convertedTemp = toKelvin(enteredTemp);
      break;
  }

  result.textContent = `Result: ${convertedTemp.toFixed(2)} ${getUnitForDisplay(convertedTemp)}`
})

function toCelsius(temp) {
  if (tempUnit.value === "fahrenheit") {
    return (temp - 32) * 5 / 9;
  } else if (tempUnit.value === "kelvin") {
    return temp - 273.15;
  } else {
    return temp; // Already in Celsius
  }
}

function toFahrenheit(temp) {
  return temp * 9 / 5 + 32;
}

function toKelvin(temp) {
  return temp + 273.15;
}

function getUnitForDisplay(temp) {
  return tempUnit.value === "celsius" ? "°C" : tempUnit.value === "fahrenheit"?"°F":"K";
}


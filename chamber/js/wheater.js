const localtemp = document.querySelector("#temp");
const wSpeed = document.querySelector("#windSpeed");
const btn = document.querySelector("#calcTemp");
const windchill = document.querySelector("#wChill");



btn.addEventListener("click", () => {
  const temp = parseInt(localtemp.value);
  const windSpeed = parseInt(wSpeed.value);

  if (temp <= 50 && windSpeed > 3) {
    result =
      Math.round(
        (35.74 +
          0.6215 * temp -
          35.75 * (windSpeed ^ 0.16) +
          0.4275 * temp * (windSpeed ^ 0.16)) *
          100
      ) / 100;
  } else if (temp >= 50 && windSpeed < 3) {
    result = "N/A";
  } else {
    result = "";
  }

  windchill.textContent = result;
});
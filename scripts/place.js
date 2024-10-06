const windChill = document.querySelector("#wind-chill");

const currentTempF = 43;
const currentWindSpeedMph = 5;

// Code created with the help of GitHub Copilot
const calculateWindChill = (tempF, windSpeedMph) => tempF <= 50 && windSpeedMph > 3 ? `${String((35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16)).toFixed(2))} ºF` : "N/A";


windChill.innerHTML = calculateWindChill(currentTempF, currentWindSpeedMph);
const windChill = document.querySelector("#wind-chill");

const currentTempF = 43;
const currentWindSpeedMph = 5;

// Code created with the help of GitHub Copilot
function calculateWindChill(tempF, windSpeedMph) {
    if (tempF <= 50 && windSpeedMph > 3) {
        const windChill = 35.74 + (0.6215 * tempF) 
                        - (35.75 * Math.pow(windSpeedMph, 0.16)) 
                        + (0.4275 * tempF * Math.pow(windSpeedMph, 0.16));
        
        return `${String(windChill.toFixed(2))} ºF`;
    } else {
        return "N/A";
    }
}

windChill.innerHTML = calculateWindChill(currentTempF, currentWindSpeedMph);
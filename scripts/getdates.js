const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
currentYear.innerHTML = String(today.getFullYear());
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

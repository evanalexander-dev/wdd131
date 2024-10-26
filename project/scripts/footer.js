const currentYear = document.querySelector("#currentyear");

const today = new Date();
currentYear.innerHTML = String(today.getFullYear());

const currentMonth = document.getElementById('month');
const dayName = document.getElementById('dayName');
const dateNumber = document.getElementById('date');
const year = document.getElementById('year');

const date = new Date();
const month = date.getMonth();
currentMonth.innerText = date.toLocaleString("en",{month:"long",})

dayName.innerHTML = date.toLocaleString("en",{weekday: "long",});

dateNumber.innerText = date.getDate();

year.innerText = date.getFullYear();


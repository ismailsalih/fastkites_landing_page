const targetDate = new Date("{{ $targetDate }}").getTime(); // Target date from Laravel

const daysElement = document.querySelector(".days .number");
const hoursElement = document.querySelector(".hours .number");
const minutesElement = document.querySelector(".minutes .number");
const secondsElement = document.querySelector(".seconds .number");

const countdownFunc = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeLeft = targetDate - currentTime; // Time difference in milliseconds

    if (timeLeft <= 0) {
        clearInterval(countdownFunc);
        // Handle the countdown ending (e.g., show a "Site is live!" message)
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the DOM
    daysElement.textContent = days < 10 ? `0${days}` : days;
    hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
    minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;

}, 1000);

document.addEventListener("DOMContentLoaded", function () {
    var timerElement = document.querySelector(".timer-1");
    var count = 0;
    var targetNumber = 11; // Replace with your desired target number

    // Update the timer every second
    var timer = setInterval(function () {
        count++;
        timerElement.textContent = count;

        // Stop the timer when the target number is reached
        if (count === targetNumber) {
            clearInterval(timer);
        }
    }, 80);
});

document.addEventListener("DOMContentLoaded", function () {
    var timerElement = document.querySelector(".timer-2");
    var count = 0;
    var targetNumber = 25; // Replace with your desired target number

    // Update the timer every second
    var timer = setInterval(function () {
        count++;
        timerElement.textContent = count;

        // Stop the timer when the target number is reached
        if (count === targetNumber) {
            clearInterval(timer);
        }
    }, 40);
});

document.addEventListener("DOMContentLoaded", function () {
    var timerElement = document.querySelector(".timer-3");
    var count = 0;
    var targetNumber = 100; // Replace with your desired target number

    // Update the timer every second
    var timer = setInterval(function () {
        count++;
        timerElement.innerHTML = `<div>${count}+</div>`;

        // Stop the timer when the target number is reached
        if (count === targetNumber) {
            clearInterval(timer);
        }
    }, 10);
});



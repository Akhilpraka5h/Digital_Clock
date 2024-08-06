// Get references to the span elements for hours, minutes, and seconds
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Update the clock every second
setInterval(() => {
  // Get the current time
  let currentTime = new Date();

  // Update the hours, minutes, and seconds, ensuring two digits
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours(); //line gets the current hour from currentTime. If the hour is less than 10, it adds a leading zero. The result is then set as the inner HTML of the hrs element.
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000); //This line closes the setInterval function and sets the interval to 1000 milliseconds (1 second).

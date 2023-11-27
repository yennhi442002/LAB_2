function updateClock() {
  // Get the current date and time
  var now = new Date();

  // Get the day in long format
  var day = now.toLocaleDateString("en-US", { weekday: "long" });

  // Get hours, minutes, and seconds
  var hours = now.getHours();
  var meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Add leading zero if the number is less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format the time string
  var formattedTime = `Today is: ${day}.<br>Current time is: ${hours} ${meridiem} : ${minutes} : ${seconds}`;

  // Get the clock element by ID
  var clockElement = document.getElementById("clock");

  // Check if the clock element is found
  if (clockElement) {
    // Update the inner HTML of the clock element
    clockElement.innerHTML = formattedTime;
  } else {
    // Display an error if the element is not found
    console.error("Element with ID 'clock' not found.");
  }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();

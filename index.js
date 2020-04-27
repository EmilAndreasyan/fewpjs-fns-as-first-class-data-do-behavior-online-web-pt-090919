/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hour = parseInt(timeString, 10);
function greet(time) {
  let hour = parseInt(time, 10);
  if (hour < 12) return "Good Morning"
  if (hour > 17) return "Good Evening"
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage (text) {
  document.getElementById('greeting').innerText = text
  document.getElementById('greeting').innerHTML = text
};
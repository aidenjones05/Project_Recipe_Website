// script.js
console.log('JS connected!');
alert('Hello! JavaScript is working!');
// This runs after the page loads
const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', () => {
  // Navigate to home page
  window.location.href = 'index.html'; // or '/' for your live site
});





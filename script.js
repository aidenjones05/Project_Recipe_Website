// script.js
console.log('JS connected!');

const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', () => {
  window.location.href = '/';
});

  const toggleButton = document.getElementById('modeToggle');
  const body = document.body;

  // Check saved preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Light Mode';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');
    toggleButton.textContent = darkModeEnabled ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', darkModeEnabled ? 'dark' : 'light');
  });

if (!localStorage.getItem('theme')) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Light Mode';
  }
}






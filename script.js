
const greeting = document.getElementById('greeting');
const storedName = localStorage.getItem('username');

if (storedName) {
  greeting.textContent = `Welcome back, ${storedName}!`;
} else {
  const name = prompt("What's your name?");
  if (name) {
    localStorage.setItem('username', name);
    greeting.textContent = `Welcome, ${name}!`;
  }
}


const button = document.getElementById('animateBtn');

button.addEventListener('click', () => {
  
  button.classList.add('animate');

 
  setTimeout(() => {
    button.classList.remove('animate');
  }, 600);
});

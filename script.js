
document.getElementById('change-btn').addEventListener('click', function () {
  const text = document.getElementById('intro-text');
  text.textContent = 'Text and style have been changed with JavaScript!';
  text.style.color = 'white';
  text.style.backgroundColor = 'teal';
  text.style.padding = '10px';
  text.style.borderRadius = '8px';
});


document.getElementById('add-element-btn').addEventListener('click', function () {
  const newPara = document.createElement('p');
  newPara.textContent = 'This is a new paragraph added to the DOM!';
  newPara.classList.add('dynamic-paragraph');
  document.getElementById('container').appendChild(newPara);
});


document.getElementById('remove-element-btn').addEventListener('click', function () {
  const container = document.getElementById('container');
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});

const Box = document.querySelector('#Grønnbox');
const button = document.querySelector('#Kjør');

button.addEventListener('click', function () {
  Box.classList.toggle('Rødbox');
  Box.classList.toggle('Blåbox');
});

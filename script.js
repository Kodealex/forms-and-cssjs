// const Box = document.querySelector('#Grønnbox');
// const button = document.querySelector('#Kjør');

// button.addEventListener('click', function () {
  // Box.classList.toggle('Rødbox');
  // Box.classList.toggle('Blåbox');
// });

const Button2 = document.querySelector("#submitButton");

Button2.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Button is clicked");
});
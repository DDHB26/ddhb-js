let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('mouseover', function (e) {
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = 'black';
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'black';
    }
  });
});
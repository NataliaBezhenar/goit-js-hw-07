const input = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

input.addEventListener('input', function(){
  text.style.fontSize = input.value+'px';
})

let theButton = document.getElementById(‘button’);
theButton.addEventListener(‘click’, ()=>{
let colors = [red, blue, green, orange, yellow, pink];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomColor;})
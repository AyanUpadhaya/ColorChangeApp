var box= document.getElementById('box');
var btn= document.getElementById('btn');
var colorName = document.getElementById('color');



const color=['red','blue','orange','green','aqua','gray','black','darkblue','silver'];

colorName.innerHTML= `<strong>Color: ${color[0].toUpperCase()}</strong>`;

btn.onclick=function(){
	var randomColor=Math.floor(Math.random()*color.length);
	box.style.background=color[randomColor];
	colorName.innerHTML= `<strong>Color: ${color[randomColor].toUpperCase()}</strong>`;
}
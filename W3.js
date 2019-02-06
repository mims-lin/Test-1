var w = 500;
var h = 300;

var canvas = document.querySelector("#myCanvas");
canvas.width = w;
canvas.height = h;
canvas.style.border = "1px solid blue";
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(w/2,h/2);

ctx.beginPath();
ctx.moveTo(w/2,h/2);
ctx.lineTo(w/2 + 50, h/2 + 50);

console.log(canvas);
console.log("week 3")

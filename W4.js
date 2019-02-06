// declare all global cariable at the top
var canvas;
var ctx;
var w = 600;
var h = 400;

/// executable code
setUpCanvas();

//// declare all functions at bottom of page

var a = add(10,22);
console.log(fa);
function add(x,y){
  var r = x + y;
  console.log(r);
  return r
}
function setUpCanvas(){

// get canvas element from html page using unique id we give it (#)
canvas = document.querySelector("myCanvas");
// change the size canvase
///don't want to use css for changing size
canvas.width = w;
canvas.height = h;
// give a border
canvas.style.border = "1pm dotted brown";
// get canvas drawing context
ctx = canvas.getContext("2d");
///

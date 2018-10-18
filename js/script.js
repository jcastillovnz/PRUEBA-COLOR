
const img= document.getElementById('imagen');
const output= document.getElementById('output');

img.addEventListener('click', function (e) {
  let ctx;
  if(!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      ctx=this.canvas.getContext('2d');
      ctx.drawImage(this, 0, 0, this.width, this.height);
  } else {

    ctx=this.canvas.getContext('2d');

  }

  const pixel = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
        
  output.innerHTML ='R: ' + pixel[0] + '<br>G: ' + pixel[1] +
      '<br>B: ' + pixel[2] + '<br>A: ' + pixel[3];
//Covierto Color RGBA a Hexadecimal

r=pixel[0] ;
g=pixel[1] ;
b=pixel[2] ;

  function componentToHex(c) {

  var hex = c.toString(16);

  return hex.length == 1 ? "0" + hex : hex;

}
/*

function changeRange() {
// Get R,G,B values & Convert string into integer.
var r = parseInt(document.getElementById("r").value);
var g = parseInt(document.getElementById("g").value);
var b = parseInt(document.getElementById("b").value);
 
// Generate color. Example: #20b9ff
var color = "#" + hex(r) + hex(g) + hex(b);
 
// Change background color and text.
document.body.style.backgroundColor = color;
document.getElementById("hex-label").innerText = color;
document.getElementById("r-label").innerText = r;
document.getElementById("g-label").innerText = g;
document.getElementById("b-label").innerText = b;
 
if (r < 100 && g < 100 && b < 100) {
document.getElementById("container").style.color = "white";
} else {
document.getElementById("container").style.color = "black";
}
}
 
function hex(v) {
// Get hexadecimal numbers.
var hex = v.toString(16);
if (v < 16) {
hex = "0" + hex;
}
return hex;
}

*/




function rgbToHex(r, g, b) {

 var hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);



}

alert(hex );



                
});

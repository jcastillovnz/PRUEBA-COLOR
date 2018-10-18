
const img= document.getElementById('mascara');
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
        

        /*
  output.innerHTML ='R: ' + pixel[0] + '<br>G: ' + pixel[1] +
      '<br>B: ' + pixel[2] + '<br>A: ' + pixel[3];
*/




//Covierto Color RGBA a Hexadecimal
r=pixel[0] ;
g=pixel[1] ;
b=pixel[2] ;

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



var hex =rgbToHex(r, g, b);





if (hex == "#31c531") {


 var figura1 = document.getElementById("figura1");
figura1.style.display = "block";


//FIGURA 1




}

if (hex == "#0e378d") {

   var figura2 = document.getElementById("figura2");
figura2.style.display = "block";
//FIGURA 2


}



if (hex == "#b324c2") {

 var figura3 = document.getElementById("figura3");
figura3.style.display = "block";


//FIGURA 3






}



if (hex == "#d83232") {

 var figura4 = document.getElementById("figura4");
figura4.style.display = "block";


//FIGURA 4



}







//alert( rgbToHex(0, 51, 255) ); // #0033ff








                
});


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
        
  output.innerHTML ='R: ' + pixel[0] + '<br>G: ' + pixel[1] +
      '<br>B: ' + pixel[2] + '<br>A: ' + pixel[3];
//Covierto Color RGBA a Hexadecimal

r=pixel[0] ;
g=pixel[1] ;
b=pixel[2] ;



                
});

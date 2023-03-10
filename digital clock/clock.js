var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
   drawFace(ctx, radius);

}

function drawFace(ctx, radius){
    var grad;
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradientr(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0.5,'#333');
    grad.addColorStop(0.5,white)
    grad.addColorStop(0.5,'#333')
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1,0, 2*Math.PI);
    ctx.fillStyle = '#333;'
    ctx.fill();

}
canvas = document.getElementById("Can");

ctx = canvas.getContext("2d");

color = "blue"

var mouseEvent = "Empty"
var lw = 1
var radio = 10

canvas.addEventListener("mousedown", md)

canvas.addEventListener("mouseup", mo)

canvas.addEventListener("mouseleave", ml)

canvas.addEventListener("mousemove", mm)

function md(e) {
    mouseEvent="mousedown"

    color=document.getElementById("cola").value;
    lw=document.getElementById("widtha").value;
    radio=document.getElementById("radius").value;
}

function mo(e) {
    mouseEvent="mouseup"
}

function ml (e) {
    mouseEvent="mouseleave"
}

function mm(e) {
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();        
        ctx.strokeStyle = color;
        ctx.lineWidth = lw;
        ctx.arc(cpx, cpy, radio ,0 , 2 * Math.PI);
        ctx.stroke()
    }
}
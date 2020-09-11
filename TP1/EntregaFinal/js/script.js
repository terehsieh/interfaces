
window.addEventListener('load', ()=>{
    document.querySelector("#pencil").addEventListener('click', pintar);
    document.querySelector("#rubber").addEventListener('click', borrar);
    
function pintar() {
    let dibujar = false;
    let borrar=false;
    console.log("pintar");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    // get the width and heigth of the windows
    canvas.height = window.innerHeight;
    canvas.widht = window.innerWidth;
    // change the color of the rectangle
    //ctx.strokeStyle = "red";
    //rectangle (top, margin left, width, heigth )
   // ctx.strokeRect(100, 100, 500, 500);

    //other functions 
    //ctx.lineWidth=5;
    
    function startPosition(e) {
        dibujar = true;
        draw(e);
    }
    function finishedPosition() {
        dibujar = false;
        ctx.beginPath();// cuando termina seteo un nuevo comienzo, reseteo
    }
    // pasa por parametro el evento, contiene las coordenadas
    function draw(e) {
        if (!dibujar) return; // si no esta pintando retornar nada
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        //obtiene las coordenadas
        ctx.lineTo(e.clientX, e.clientY);//trazos 
        ctx.strokeStyle = "grey";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }

    //event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

};

function borrar() {
  borrar = true;
        draw(e);
};
 
})



// resize the canvas of the window
//window.addEventListener('resize, ');
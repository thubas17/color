var mouseEvent = "empty"; //significa que esta variável está vazia
var color = "black";
var largura = 4;
var posicaoAnteriorX, posicaoAnteriorY, posicaoAtualX,posicaoAtualY;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    
    
    canvas.addEventListener("mousedown", myMouseDown);
    
    function myMouseDown(e)
    {
    mouseEvent="mouseDown"
    color=document.getElementById("color").value        
    largura=document.getElementById("widthLine").value        
    }



    canvas.addEventListener("mousemove", myMouseMove);
   
    function myMouseMove(e)
    {
        posicaoAtualX = e.clientX - canvas.offsetLeft;
        posicaoAtualY = e.clientY- canvas.offsetTop;

        

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = largura;

        ctx.moveTo(posicaoAnteriorX,posicaoAnteriorY);

        ctx.lineTo(posicaoAtualX,posicaoAtualY);
        
        ctx.stroke();

        }
    posicaoAnteriorX=posicaoAtualX
    posicaoAnteriorY=posicaoAtualY   
 
    }



    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent="up"
    }



    canvas.addEventListener("mouseleave", myMouseLeave); 
    function myMouseLeave(e)
    {
        mouseEvent="leave"   
    }

    function clearArea() {
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
    }
    

   
    //para celular 
  
   var width = screen.width;
    newWidth =  screen.width - 70; 
    newHeight = screen.height - 300;
	
    if(width < 992)
	{
	document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
    
	}
	canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) 
{
	

    color = document.getElementById("color").value;
    largura = document.getElementById("largura").value;
  

    posicaoAnteriorX = e.touches[0].clientX - canvas.offsetLeft;
    posicaoAnteriorY = e.touches[0].clientY - canvas.offsetTop;
    mouseEvent = "touchstart";
    
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) 
{

    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
   
    if (mouseEvent == "touchstart") {

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = largura;
    

    
    ctx.moveTo(posicaoAnteriorX, posicaoAnteriorY);

    
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    posicaoAnteriorX = currentPositionOfTouchX; 
    posicaoAnteriorY = currentPositionOfTouchY;

    }
   
}


    


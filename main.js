var mouseEvent = "empty";
var lastx, lasty;   
    color = "black";
    widthOfLine = 2;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    var width = screen.width;

    var newwidth = width - 70;
    var newheight = screen.height - 300;

    if(width < 992) {
        document.getElementById("myCanvas").width = newwidth
        document.getElementById("myCanvas").height = newheight;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("Touch has started.");

        //Addictonal Activity start
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Addictonal Activity ends

       lastx = e.touches[0].clientX - offsetLeft;
       lasty = e.touches[0].clientY - offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("Touch has started moving.");

        currenttouchx = e.touches[0].clientX - canvas.offsetLeft;
        currenttouchy = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Last position of x and y coordinates = ")
        console.log("x = " + lastx + " y = " + lasty);
        ctx.moveTo(lasty, lasty);

        console.log("Curreent position of x and y coordinates = ")
        console.log("x = " + currenttouchx + " y = " + currenttouchy);
        ctx.lineTo(currenttouchy, currenttouchy);
        ctx.stroke();

        lastx = currenttouchx;
        lasty = currenttouchy;
    }

    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
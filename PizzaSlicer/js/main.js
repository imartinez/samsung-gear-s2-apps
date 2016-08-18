window.onload = function() {
    // Initialization job
	selectedSlices = 3;
	
	var canvas = document.getElementById("canvas");
	canvas.width = screen.width;
	canvas.height = screen.height;
	canvas.style.position = "absolute";
    var ctx = canvas.getContext("2d");
    var RADIUS = screen.width/2;
    
    var number = document.querySelector('#number');

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
    
    // Instructions
    var instructions = document.querySelector('#instructions');
    instructions.addEventListener("click", function() {
    	instructions.style.display = "none";
    });
    
    // Rotary event
    document.addEventListener("rotarydetent", function(ev) 
	{
    	/* Get the direction value from the event */
 	   var direction = ev.detail.direction;
 	   
 	   if (direction == "CW")
 	   {
 	      selectedSlices +=1;  
 	   }
 	   else if (direction == "CCW")
 	   {
 		  if (selectedSlices >= 2)
 			  selectedSlices -=1;
 	   }
 	   
 	   number.innerHTML = selectedSlices;
 	   paintSlices(selectedSlices);
	});
    
    function paintSlices(num) {
    	ctx.clearRect(0, 0, canvas.width, canvas.height);
    	if (num > 1) {
	    	for (i = 1; i <= num; i++) { 
	    		drawAngledLine(RADIUS, RADIUS, RADIUS, i * (360 / num));
	    	}
    	}
    }
    
    function drawAngledLine(x, y, length, angle) {
        var radians = angle / 180 * Math.PI;
        var endX = x + length * Math.cos(radians);
        var endY = y - length * Math.sin(radians);
        ctx.beginPath();
        ctx.moveTo(x, y)
        ctx.lineTo(endX, endY);
        ctx.lineWidth = 10;
        ctx.closePath();
        ctx.strokeStyle = "#e68033"
        ctx.stroke();
    }
    
    number.innerHTML = selectedSlices;
    paintSlices(selectedSlices);
};
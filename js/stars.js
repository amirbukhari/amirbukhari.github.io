var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = canvas.width = window.innerWidth;
canvas.height = canvas.height = window.innerHeight;
ctx.fillStyle = "#FFF";

var myTimer =setInterval(draw, 100);
var myTimer2 = setInterval(stopTimers,2500)
var counter = 0;
function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for(i = 0; i <20; i++)
	{
		var x = Math.floor((Math.random() * canvas.width) + 1); 
		var y = Math.floor((Math.random() * canvas.height) + 1); 
		var size = Math.floor((Math.random() * 5) + 1); 
		//ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16);
		ctx.arc(x, y, size, 0, Math.PI*2, true);
		ctx.fill();
		ctx.cls();
	}

		
	
}

function stopTimers()
{
	clearInterval(myTimer);
	clearInterval(myTimer2);
}
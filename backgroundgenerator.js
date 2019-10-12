var random=document.getElementById("random");
var auto=document.getElementById("auto");
var reset=document.getElementById("reset");
var stop=document.getElementById("stop");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");


color1.addEventListener("input",setColor);
color2.addEventListener("input",setColor);
random.addEventListener("click",setRandom);
reset.addEventListener("click",setReset);


function setReset()
{
	body.style.background='white';
}


function selectRandom()
{
   var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(15);
   return newColor;
}


function setRandom()
{
   color1.value=selectRandom();
   color2.value=selectRandom();
   setColor();
}


function setColor()
{
  body.style.background="linear-gradient(to right," + color2.value + "," + color1.value + ")";
}

auto.addEventListener("click",function(){
	interval=setInterval(setRandom, 1024);
});
stop.addEventListener("click",function(){
	clearInterval(interval);
});


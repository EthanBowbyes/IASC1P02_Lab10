var todayDate= new Date();
var seconds = todayDate.getSeconds();

//Math.round(new Date().getTime()/1000)
//var todayDate= new getTime();
//var Seconds = todayDate.getSeconds();

function stopTime()
{
	var myAlert = alert("You have been on the page for " + seconds + " seconds!");
	console.log(myAlert);
}
var todayDate= new Date();
var seconds = todayDate.getSeconds()+ "." + todayDate.getMilliseconds(); 


//Math.round(new Date().getTime()/1000)
//var todayDate= new Date();
//var Seconds = todayDate.getTime();

function stopTime()
{
	var myAlert = alert("You have been on the page for " + seconds + " seconds!");
	console.log(myAlert);
}
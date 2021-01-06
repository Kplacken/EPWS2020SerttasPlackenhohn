/*-----------Pop-up------------------*/ 

/*  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout1*/

var myVar;

function myFunction() {
 // myVar = setInterval(alertFunc, 10800000);
  myVar = setInterval(alertFunc, 5000);
}

function myFunction1() {
  myVar2 = clearInterval(myVar)
}

function alertFunc() {
  alert("Mach eine Übung und vergiss nicht genug zu trinken!");
}
 
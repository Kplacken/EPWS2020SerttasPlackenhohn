
/* Open */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

/* Close */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


/*-----------Pop-up------------------*/ 

/*  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout1*/

var myVar;

function myFunction() {
 // myVar = setInterval(alertFunc, 10800000);
  myVar = setInterval(alertFunc, 3000);
}

function myFunction1() {
  myVar2 = clearInterval(myVar)
}

function alertFunc() {
  alert("Mach eine Übung und vergiss nicht genug zu trinken!");
}
 


/*--------Stoppuhr----https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_stop----------*/
var f = 21;
function myCounter() {
  if(f > 0)
  document.getElementById("stoppuhr").innerHTML = --f;
    else
        clearInterval();
}


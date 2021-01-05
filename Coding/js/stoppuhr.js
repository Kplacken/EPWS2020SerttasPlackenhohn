/*--------Stoppuhr----https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_stop----------*/
var f = 21;
function myCounter() {
  if(f > 0)
  document.getElementById("stoppuhr").innerHTML = --f;
    else
        clearInterval();
}


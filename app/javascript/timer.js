window.onload = function(){
  let time = 14;
  let counter;
  let start = document.getElementById("start");
  let stop = document.getElementById("stop");

  start.onclick = function() {
  toggle();
  counter = setInterval( count, 1000 );
  }

  stop.onclick = function() {
    toggle();
    clearInterval( counter );
    }
} 
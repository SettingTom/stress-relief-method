window.onload = function(){
  let time = 14;
  let counter;
  let start = document.getElementById("start");

  start.onclick = function() {
  toggle();
  counter = setInterval( count, 1000 );
  }

} 
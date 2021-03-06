window.onload = function(){
  let counter;
  let start = document.getElementById("start");
  let stop = document.getElementById("stop");
  let reset = document.getElementById("reset");
  let sec = document.getElementById("sec");
  let min = document.getElementById("min");

  start.onclick = function() {
    toggle();
    counter = setInterval( count, 1000 );
  }

  stop.onclick = function() {
    toggle();
    clearInterval( counter );
  }

  function toggle() {
    if( start.disabled ) {
      start.disabled = false;
      stop.disabled = true;
    } else {
      start.disabled = true
      stop.disabled = false;
    }
  }

  function count() {
    if( time === 0 ) {
      sec.innerHTML = 0;
      min.innerHTML = 0;
      toggle();
      alert("時間となりました。");
      clearInterval( counter );
    } else {
      time -= 1;
      sec.innerHTML = time % 60;
      min.innerHTML = Math.floor( time / 60 );
    }
  }
}
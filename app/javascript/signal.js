window.addEventListener('load', () => {
  const signal_check = document.getElementById("signal_check");
  
  signal_check.addEventListener("click", () => {
    if(signal_anime1.classList.contains("signal_anime1")){
      signal_anime1.classList.remove("signal_anime1");
    }else{
      signal_anime1.classList.add("signal_anime1");
    }

    if(signal_anime2.classList.contains("signal_anime2")){
      signal_anime2.classList.remove("signal_anime2");
    }else{
      signal_anime2.classList.add("signal_anime2");
    }

    if(signal_anime3.classList.contains("signal_anime3")){
      signal_anime3.classList.remove("signal_anime3");
    }else{
      signal_anime3.classList.add("signal_anime3");
    }
  })
});


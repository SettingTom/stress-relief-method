window.addEventListener('load', () => {
  const signal_check = document.getElementById("signal_check");
  
  signal_check.addEventListener("click", () => {

    if(signal_anime.classList.contains("signal_anime")){
      signal_anime.classList.remove("signal_anime");
    }else{
      signal_anime.classList.add("signal_anime");
    }
  })
});


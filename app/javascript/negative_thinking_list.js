window.addEventListener('load', () => {
  const sadInput = document.getElementById("sad");
  const shameInput = document.getElementById("shame");
  const anxietyInput = document.getElementById("anxiety");
  const disgustInput = document.getElementById("disgust");
  const angerInput = document.getElementById("anger");
  const guiltInput = document.getElementById("guilt");
  const frustrationInput = document.getElementById("frustration");
  const fillLabel = document.getElementById("think");

  sadInput.addEventListener("click", () => {
    fillLabel.innerHTML = (sadInput.value)
  });

  shameInput.addEventListener("click", () => {
    fillLabel.innerHTML = (shameInput.value)
  });

  anxietyInput.addEventListener("click", () => {
    fillLabel.innerHTML = (anxietyInput.value)
  });

  disgustInput.addEventListener("click", () => {
    fillLabel.innerHTML = (disgustInput.value)
  });

  angerInput.addEventListener("click", () => {
    fillLabel.innerHTML = (angerInput.value)
  });

  guiltInput.addEventListener("click", () => {
    fillLabel.innerHTML = (guiltInput.value)
  });

  frustrationInput.addEventListener("click", () => {
    fillLabel.innerHTML = (frustrationInput.value)
  });
});
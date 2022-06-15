window.addEventListener('load', () => {
  const sadInput = document.getElementById("sad");
  const fillLabel = document.getElementById("think");
  sadInput.addEventListener("click", () => {
    fillLabel.innerHTML = ("悲しみ")
  });
});
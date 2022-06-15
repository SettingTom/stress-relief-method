window.addEventListener('load', () => {
  const priceInput = document.getElementById("sad");
  const profitDom = document.getElementById("think");
  priceInput.addEventListener("click", () => {
    profitDom.innerHTML = ("悲しみ")
  });
});
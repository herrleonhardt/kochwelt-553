function calculatePortion() {

  let onePortion = [100, 2, 250, 150, 150, 150];

  let amount = document.getElementById("amountInput").value;

  for (let i = 0; i < onePortion.length; i++) {
      let result = onePortion[i] * amount;
      document.getElementById(`zutat_${i}`).innerHTML = result;
  }
}

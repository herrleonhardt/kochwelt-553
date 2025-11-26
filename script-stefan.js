calculatePortions();

function calculatePortions() {
  console.log("Portionen berechnen");
  const list = document.getElementById("ingredients-list");
  const listItems = list.getElementsByTagName("li");
  const portionInput = document.getElementById("portions-count").value;
  console.log(portionInput);

  //forEach funktioniert nur bei Arrays, HTMLCollection in Array umwandeln
  const listItemsArray = Array.from(listItems);
  listItemsArray.forEach((item) => {
    const baseAmount = item.getAttribute("base-amount");
    if (baseAmount) {
      newAmount = baseAmount * portionInput;
      item.querySelector(".amount").innerText = newAmount;
    }
  });
}


export function calculateRecipieIngredients(ingredientsArray){

const list = document.getElementById("ingredients-list");
const portionInput = document.getElementById("portions-count").value;
list.innerHTML = "";

ingredientsArray.forEach((ingredient) => {
    list.innerHTML += getIngredientHTMLTemplate(ingredient, portionInput);
    });
}

function getIngredientHTMLTemplate(ingredient, portionInput) {
  let amountString = "";
  let unitString = "";
  
  if (ingredient.amount !== "") {
    amountString = `${ingredient.amount * portionInput} `;
  }
  if (ingredient.unit !== "") {
    unitString = `${ingredient.unit} `;
  }

  return `
    <li>${amountString}${unitString}${ingredient.name}</li>
    `;
}
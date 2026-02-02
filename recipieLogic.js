/**
 * //Initialisiert die Logik für das Rezept
 * //
 * @param {*} recipie 
 */
export function initializeRecipieLogic(recipie){
const Form = document.getElementById("portions-form");                           //form from HTML
Form.addEventListener("submit", function (event) {                              //listen to submit event
  event.preventDefault();                                                       //prevent page reload  
  calculateRecipieIngredients(recipie);                                         //calculate ingredients
});
calculateRecipieIngredients(recipie);                                           //initial calculation on load
}

function calculateRecipieIngredients(ingredientsArray){
const list = document.getElementById("ingredients-list");                       //ul from HTML
const portionInput = document.getElementById("portions-count").value;           //input-field from HTML
list.innerHTML = "";                                                            //clear list before adding new items                          
ingredientsArray.forEach((ingredient) => {                                      //iterate through ingredients
    list.innerHTML += getIngredientHTMLTemplate(ingredient, portionInput);      //add new list item for each ingredient, layout from template function
    });
}

function getIngredientHTMLTemplate(ingredient, portionInput) {
  let amountString = "";
  let unitString = "";
  if (ingredient.amount !== "")                                                 //only add amount if it exists
    amountString = `${ingredient.amount * portionInput} `;                      //space after amount to separate from unit
  if (ingredient.unit !== "")                                                   //only add unit if it exists
    unitString = `${ingredient.unit} `;                                         //space after unit to separate from name
  return `<li>${amountString}${unitString}${ingredient.name}</li>`;             //return formatted list item
}

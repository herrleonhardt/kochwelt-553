//script-stefan.js
//importiere die Funktion aus recipieLogic.js
import { calculateRecipieIngredients } from "./recipieLogic.js";

//Definiere die Zutatenliste als Array von Objekten
let GulaschZutaten = [
  { name: "Gulasch (Schwein, am besten Schinkengulasch)", amount: 125, unit: "g" },
  { name: "Zwiebeln", amount: 1, unit: "" },
  { name: "Paprikaschoten", amount: 0.5, unit: "" },
  { name: "Margarine", amount: 12.5, unit: "g" },
  { name: "Tomatenmark", amount: 0.25, unit: "EL" },
  { name: "Paprikapulver (edelsüß)", amount: 0.25, unit: "EL" },
  { name: "Rinderbrühe", amount: 125, unit: "ml" },
  { name: "Speisestärke", amount: 0.5, unit: "TL" },
  { name: "Schmand", amount: 0.25, unit: "Becher" },
  { name: "Salz und Pfeffer nach Geschmack", amount: "", unit: "" }
];

//Füge dem Formular einen Event Listener hinzu
//der auf das Submit-Ereignis hört
//und die Funktion calculatePortions aufruft
const Form = document.getElementById("portions-form");

Form.addEventListener("submit", function (event) {
  event.preventDefault();
  calculatePortions();
});


//Rufe die Funktion calculatePortions auf, um die Zutaten initial anzuzeigen
calculatePortions();

//Definiere die Funktion calculatePortions
//die die Funktion calculateRecipieIngredients mit der Zutatenliste aufruft
function calculatePortions() {
  calculateRecipieIngredients(GulaschZutaten);
}


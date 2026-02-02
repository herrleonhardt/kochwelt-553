//importiere die Funktion zur Initialisierung der Rezeptlogik
//aus der Datei recipieLogic.js
import { initializeRecipieLogic } from "./recipieLogic.js";

//Definiere die Zutatenliste als Array von Objekten
let Zutaten = [
  { name: "Ei", amount: 1, unit: "" },
  { name: "Bacon", amount: 2, unit: "Streifen" },
  { name: "English Muffin", amount: 1, unit: "" },
  { name: "Mutter", amount: 20, unit: "g" },
  { name: "Eigelb", amount: 1, unit: "" },
  { name: "Salz / Pfeffer", amount: "", unit: "" }
];

//Rufe die Funktion zur Initialisierung der Rezeptlogik auf
//und übergebe die Zutatenliste als Argument
initializeRecipieLogic(Zutaten);
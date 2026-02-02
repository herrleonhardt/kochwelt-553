
import { initializeRecipieLogic } from "./recipieLogic.js";

//Definiere die Zutatenliste als Array von Objekten
let Zutaten = [
  { name: "Nudeln", amount: 100, unit: "gr" },
  { name: "Paprika", amount: 2, unit: "" },
  { name: "Mais", amount: 250, unit: "gr" },
  { name: "Erbsen", amount: 150, unit: "gr" },
  { name: "Karotten", amount: 150, unit: "gr" },
  { name: "Butter", amount: 150, unit: "gr" }
];

//Rufe die Funktion zur Initialisierung der Rezeptlogik auf
//und übergebe die Zutatenliste als Argument
initializeRecipieLogic(Zutaten);
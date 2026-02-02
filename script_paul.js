//importiere die Funktion zur Initialisierung der Rezeptlogik
//aus der Datei recipieLogic.js
import { initializeRecipieLogic } from "./recipieLogic.js";

//Definiere die Zutatenliste als Array von Objekten
let Zutaten = [
  { name: "Kalbsschnitzel (à 160 g)", amount: 1, unit: "Stück" },
  { name: "Salz nach Geschmack", amount: "", unit: "" },
  { name: "Eier", amount: 0.5, unit: "" },
  { name: "Brösel", amount: 75, unit: "g" },
  { name: "Backfett", amount: 0.25, unit: "Pkg" },
  { name: "Zitrone", amount: 0.25, unit: "Stk" }
];

//Rufe die Funktion zur Initialisierung der Rezeptlogik auf
//und übergebe die Zutatenliste als Argument
initializeRecipieLogic(Zutaten);

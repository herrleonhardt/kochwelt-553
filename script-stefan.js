/*
für die funktionalität ist im HTML folgendes erforderlich:
- ein formular mit der id "portions-form"
- ein eingabefeld mit der id "portions-count"
- eine ungeordnete liste mit der id "ingredients-list"

<script type="module" src="./script-stefan.js"></script>    hier den namen des scripts angeben
  <script type="module" src="./recipieLogic.js"></script>
*/

//importiere die Funktion zur Initialisierung der Rezeptlogik
//aus der Datei recipieLogic.js
import { initializeRecipieLogic } from "./recipieLogic.js";

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


//Rufe die Funktion zur Initialisierung der Rezeptlogik auf
//und übergebe die Zutatenliste als Argument
initializeRecipieLogic(GulaschZutaten);


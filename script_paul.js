const basePortion = 4;

const zutaten = {
  schnitzel: 4,
  salz: 4,
  mehl: 4,
  eier: 2,
  broesel: 300,
  fett: 1,
  zitrone: 1,
};

function updateTable() {
  let newPortion = parseInt(document.getElementById("portionInput").value, 10);
  const factor = newPortion / basePortion;

  if (isNaN(newPortion) || newPortion < 1 || newPortion > 20) {
    alert("Nur Zahlen zwischen 1 und 20 sind gültig!");
    document.getElementById("portionInput").value = basePortion;
    newPortion = basePortion;
  }

  document.getElementById("schnitzel").textContent =
    zutaten.schnitzel * factor + " Stück Kalbsschnitzel (à 160 g)";
  document.getElementById("salz").textContent =
    zutaten.salz * factor + " Prise/n Salz";
  document.getElementById("mehl").textContent =
    zutaten.mehl * factor + " g Mehl (griffig)";
  document.getElementById("eier").textContent =
    zutaten.eier * factor + " Stk Eier";
  document.getElementById("broesel").textContent =
    zutaten.broesel * factor + " g Semmelbrösel";
  document.getElementById("fett").textContent =
    zutaten.fett * factor + " Pkg Backfett (Öl od. Butterschmalz)";
  document.getElementById("zitrone").textContent =
    zutaten.zitrone * factor + " Stk Zitrone";
}

window.onload = updateTable;

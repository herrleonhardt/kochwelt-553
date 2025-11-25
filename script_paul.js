const basePortion = 4;

const zutaten = {
    schnitzel: 4,
    salz: 4,
    mehl: 4,
    eier: 2,
    broesel: 300,
    fett: 1,
    zitrone: 1
}

function updateTable() {
    const newPortion = parseInt(document.getElementById("portionInput").ariaValueMax, 10);
    const factor = newPortion / basePortion;

    
}
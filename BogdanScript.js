
function formatZitrone(value) {
    if (value === 0.5) return "½";
    if (value === 1) return "1";
    if (value === 1.5) return "1½";
    if (value === 2) return "2";
    return value;
}


let button = document.getElementById("portionen");
let input  = document.getElementById("anzahl");
let msg    = document.getElementById("limitMessage");


input.addEventListener("input", function () {
    let val = Number(input.value);

    if (val < 1) {
        input.value = 1;
        msg.style.display = "block";
        return;
    }

    if (val > 4) {
        input.value = 4;
        msg.style.display = "block";
        return;
    }

  
    msg.style.display = "none";
});


button.addEventListener("click", function () {
    msg.style.display="none";
    let portionen = Number(input.value);
    let mengen = document.querySelectorAll(".menge");

    // Eier
    mengen[0].textContent = 2 * portionen;

    // Eigelb
    mengen[1].textContent = 1 * portionen;

    // Butter
    mengen[2].textContent = (50 * portionen) + "g";

    // English Muffin
    mengen[3].textContent = 1 * portionen;

    // Bacon
    mengen[4].textContent = 2 * portionen;

    // Zitrone (½ per Portion)
    let zitroneNeu = 0.5 * portionen;
    mengen[5].textContent = formatZitrone(zitroneNeu);
});


document.getElementById("calculate").addEventListener("click", function () {

//HESPLAMALAR
const portion =Number(document.getElementById("zutaten").value);
const zutaten = document.getElementsByClassName("zutat");

for (let i = 0; i < zutaten.length; i++) {
const text = zutaten[i].innerHTML;
const numberMatch = text.match(/(\d+)\s*/);

if (numberMatch) {
const base = Number(numberMatch[1]);
const result = base * portion;

zutaten[i].innerHTML = text.replace(numberMatch[1], result);


}



}



//HESAPLAMAR

});

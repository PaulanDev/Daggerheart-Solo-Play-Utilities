import { adversaryArr } from "./importer.js";
import { createAdvCard } from "./createCard.js";

const ADVDISPLAY = document.getElementById("adv-display");
const selectionBtns = document.getElementsByClassName("sel-div");

let selectedTiers = [];
let selectedTypes = [];

for (let i = 0; i < selectionBtns.length; i++) {
  selectionBtns[i].addEventListener("click", () => {
    selectionBtns[i].classList.toggle("sel-div-active");
    selectedTiers = document.querySelectorAll(
      ".sel-div.tier-sel-div.sel-div-active"
    );
    selectedTypes = document.querySelectorAll(
      ".sel-div.type-sel-div.sel-div-active"
    );
    console.log(selectedTiers);
    console.log(selectedTypes);
  });
}

window.addEventListener("load", function () {
  //If there are no selected parameters for tier or type
  if (selectedTiers.length == 0 && selectedTypes.length == 0) {
    for (let i = 0; i < adversaryArr.length; i++) {
      ADVDISPLAY.innerHTML += createAdvCard(adversaryArr[i]);
    }
  }
});

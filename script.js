import { adversaryArr } from "./importer.js";
import { createAdvCard } from "./createCard.js";

const ADVDISPLAY = document.getElementById("adv-display");
const selectionBtns = document.getElementsByClassName("sel-div");

let selectedTiers = [];
let selectedTypes = [];

for (let i = 0; i < selectionBtns.length; i++) {
  selectionBtns[i].addEventListener("click", () => {
    //Reset the display div
    ADVDISPLAY.innerHTML = ``;

    //Toggle div buttons on click
    selectionBtns[i].classList.toggle("sel-div-active");

    //Set selections arrays
    selectedTiers = Array.from(
      document.querySelectorAll(".sel-div.tier-sel-div.sel-div-active")
    ).map((item) => item.id.slice(0, -3));

    selectedTypes = Array.from(
      document.querySelectorAll(".sel-div.type-sel-div.sel-div-active")
    ).map((item) => item.id.slice(0, -3));

    //Display cards
    if (selectedTiers.length == 0 && selectedTypes.length == 0) {
      /*
      for (let i = 0; i < adversaryArr.length; i++) {
        ADVDISPLAY.innerHTML += createAdvCard(adversaryArr[i]);
      }
        */
    } else if (selectedTypes.length > 0 && selectedTiers.length == 0) {
      for (let i = 0; i < adversaryArr.length; i++) {
        if (selectedTypes.includes(adversaryArr[i].type.toLowerCase())) {
          ADVDISPLAY.innerHTML += createAdvCard(adversaryArr[i]);
        }
      }
    } else if (selectedTiers.length > 0 && selectedTypes.length == 0) {
      for (let i = 0; i < adversaryArr.length; i++) {
        if (selectedTiers.includes("tier" + adversaryArr[i].tier)) {
          ADVDISPLAY.innerHTML += createAdvCard(adversaryArr[i]);
        }
      }
    } else {
      for (let i = 0; i < adversaryArr.length; i++) {
        if (
          selectedTiers.includes("tier" + adversaryArr[i].tier) &&
          selectedTypes.includes(adversaryArr[i].type.toLowerCase())
        ) {
          ADVDISPLAY.innerHTML += createAdvCard(adversaryArr[i]);
        }
      }
    }
  });
}

/*
//Create cards on load
window.addEventListener("load", function () {
  //If there are no selected parameters for tier or type
  for (let i = 0; i < adversaryArr.length; i++) {
    ADVDISPLAY.innerHTML += createAdvCard(adversaryArr[i]);
  }
});
*/

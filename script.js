import { adversaryArr } from "./importer.js";

const ADVDISPLAY = document.getElementById("adv-display");
const TESTADV = adversaryArr[16];

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
      ".sel-div.sel-div-active.type-sel-div"
    );
    console.log(selectedTiers);
    console.log(selectedTypes);
  });
}

window.addEventListener("load", function () {
  let TESTEXPS = TESTADV.experiences;
  let TESTEXPHOLDER = "";
  if (TESTEXPS.length > 0) {
    TESTEXPHOLDER = `<p class="adv-card-experiences"><strong>Experiences: </strong> ${TESTEXPS.join(
      ", "
    )}</p>`;
  }

  let TESTFEATS = TESTADV.features;
  let TESTFEATHOLDER = "";
  for (const feature in TESTFEATS) {
    TESTFEATHOLDER += `<p class="adv-crad-feature"><em><strong>${TESTFEATS[feature].name} - ${TESTFEATS[feature].type}:</strong></em> ${TESTFEATS[feature].text}</p>`;
  }

  ADVDISPLAY.innerHTML = `
    <div class="adv-card">
        <p class="adv-card-name"><strong>${TESTADV.name}</strong></p>
        <p class="adv-card-taxo"><strong><em>Tier ${TESTADV.tier} ${
    TESTADV.type
  }</em></strong></p>
        <p class="adv-card-desc"><em>${TESTADV.desc}</em></p>
        <p class="adv-card-motives"><strong>Motives & Tactics:</strong> ${
          TESTADV.motives
        }</p>
        <div class="adv-card-stats">
            <p class="adv-card-defense"><strong>Difficulty:</strong> ${
              TESTADV.difficulty
            } | <strong>Thresholds:</strong> ${
    TESTADV.thresholds.join("/") || "None"
  } | <strong>HP:</strong> ${TESTADV.hp} | <strong>Stress:</strong> ${
    TESTADV.stress
  }</p>
            <p class="adv-card-weapon"><strong>ATK:</strong> ${
              TESTADV.atk
            } | <strong>${TESTADV.weapon.wpnName}:</strong> ${
    TESTADV.weapon.wpnRange
  } | ${TESTADV.weapon.wpnDamage}</p>
            ${TESTEXPS.length > 0 ? TESTEXPHOLDER : null}
    </div>
    <p class="adv-card-feature-title"><strong>FEATURES</strong></p>
    <div class="adv-card-feature-list">
      ${TESTFEATHOLDER}
    </div>
    </div>
  `;
});

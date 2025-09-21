import { adversaryArr } from "./importer.js";

const ADVDISPLAY = document.getElementById("adv-display");
const TESTADV = adversaryArr[16];

const tier1Sel = document.getElementById("tier1Sel");
const tier2Sel = document.getElementById("tier2Sel");
const tier3Sel = document.getElementById("tier3Sel");
const tier4Sel = document.getElementById("tier4Sel");

const bruiserSel = document.getElementById("bruiserSel");
const hordeSel = document.getElementById("hordeSel");
const leaderSel = document.getElementById("leaderSel");
const minionSel = document.getElementById("minionSel");
const rangedSel = document.getElementById("rangedSel");
const skulkSel = document.getElementById("skulkSel");
const socialSel = document.getElementById("socialSel");
const soloSel = document.getElementById("soloSel");
const standardSel = document.getElementById("standardSel");
const supportSel = document.getElementById("supportSel");

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

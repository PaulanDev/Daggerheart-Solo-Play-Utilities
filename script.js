import { adversaryArr } from "./importer.js";

const TESTPARA = document.getElementById("test-para");
const TESTADV = adversaryArr[16];

window.addEventListener("load", function () {
  let TESTEXPS = TESTADV.experiences;
  let TESTEXPHOLDER = "";
  if (TESTEXPS.length > 0) {
    TESTEXPHOLDER = `<p class="adv-card-experiences"><strong>Experiences: </strong> ${TESTEXPS.join(
      ", "
    )}</p>`;
  }

  TESTPARA.innerHTML = `
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
    </div>
  `;
});

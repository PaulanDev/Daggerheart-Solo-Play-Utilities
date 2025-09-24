export const createAdvCard = (targetAdv) => {
  let targetExps = targetAdv.experiences;
  let targetExpHolder = "";
  if (targetExps.length > 0) {
    targetExpHolder = `<p class="adv-card-experiences"><strong>Experiences: </strong> ${targetExps.join(
      ", "
    )}</p>`;
  }

  let targetFeats = targetAdv.features;
  let targetFeatHolder = "";
  for (const feature in targetFeats) {
    targetFeatHolder += `<p class="adv-crad-feature"><em><strong>${targetFeats[feature].name} - ${targetFeats[feature].type}:</strong></em> ${targetFeats[feature].text}</p>`;
  }

  return `
    <div class="adv-card">
        <p class="adv-card-name"><strong>${targetAdv.name}</strong></p>
        <p class="adv-card-taxo"><strong><em>Tier ${targetAdv.tier} ${
    targetAdv.type
  }</em></strong></p>
        <p class="adv-card-desc"><em>${targetAdv.desc}</em></p>
        <p class="adv-card-motives"><strong>Motives & Tactics:</strong> ${
          targetAdv.motives
        }</p>
        <div class="adv-card-stats">
            <p class="adv-card-defense"><strong>Difficulty:</strong> ${
              targetAdv.difficulty
            } | <strong>Thresholds:</strong> ${
    targetAdv.thresholds.join("/") || "None"
  } | <strong>HP:</strong> ${targetAdv.hp} | <strong>Stress:</strong> ${
    targetAdv.stress
  }</p>
            <p class="adv-card-weapon"><strong>ATK:</strong> ${
              targetAdv.atk
            } | <strong>${targetAdv.weapon.wpnName}:</strong> ${
    targetAdv.weapon.wpnRange
  } | ${targetAdv.weapon.wpnDamage}</p>
            ${targetExps.length > 0 ? targetExpHolder : null}
    </div>
    <p class="adv-card-feature-title"><strong>FEATURES</strong></p>
    <div class="adv-card-feature-list">
      ${targetFeatHolder}
    </div>
    </div>
  `;
};

export const Spy = {
  name: "SPY",
  tier: 2,
  type: "Social",
  desc: "A skilled espionage agent with a knack for being in the right place to overhear secrets.",
  motives: "Cut and run, disguise appearance, eavesdrop",
  difficulty: 15,
  thresholds: [8, 17],
  hp: 4,
  stress: 3,
  atk: "−2",
  weapon: { wpnName: "Dagger", wpnRange: "Melee", wpnDamage: "2d6+3 phy" },
  experiences: ["Espionage +3"],
  features: [
    {
      name: "Gathering Secrets",
      type: "Action",
      text: "Spend a Fear to describe how the Spy knows a secret about a PC in the scene.",
    },
    {
      name: "Fly on the Wall",
      type: "Reaction",
      text: "When a PC or group is discussing something sensitive, you can mark a Stress to reveal that the Spy is present in the scene, observing them. If the Spy escapes the scene to report their findings, you gain 1d4 Fear. ",
    },
  ],
};

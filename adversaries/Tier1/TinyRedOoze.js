export const TinyRedOoze = {
  name: "TINY RED OOZE",
  tier: 1,
  type: "Skulk",
  desc: "A small moving mound of translucent flaming red slime",
  motives: "Blaze, camouflage",
  difficulty: 11,
  thresholds: [5, null],
  hp: 2,
  stress: 1,
  atk: "−1",
  weapon: {
    wpnName: "Ooze Appendage",
    wpnRange: "Melee",
    wpnDamage: "1d4+2 mag",
  },
  experiences: [],
  features: [
    {
      name: "Burning",
      type: "Reaction",
      text: "When a creature within Melee range deals damage to the Ooze, they take 1d6 direct magic damage",
    },
  ],
};

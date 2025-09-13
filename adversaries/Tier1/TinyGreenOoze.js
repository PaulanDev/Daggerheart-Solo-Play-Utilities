export const TinyGreenOoze = {
  name: "TINY GREEN OOZE",
  tier: 1,
  type: "Skulk",
  desc: "A small moving mound of translucent green slime.",
  motives: "Camouflage, creep up",
  difficulty: 14,
  thresholds: [4, null],
  hp: 2,
  stress: 1,
  atk: "−1",
  weapon: {
    wpnName: "Ooze Appendage",
    wpnRange: "Melee",
    wpnDamage: "1d4+1 mag",
  },
  experiences: [],
  features: [
    {
      name: "Acidic Form",
      type: "Passive",
      text: "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefi ts (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP.",
    },
  ],
};

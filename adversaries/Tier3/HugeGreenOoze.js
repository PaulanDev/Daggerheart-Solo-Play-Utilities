export const HugeGreenOoze = {
  name: "HUGE GREEN OOZE",
  tier: 3,
  type: "Skulk",
  desc: "A translucent green mound of acid taller than most humans.",
  motives: "Camouflage, creep up, envelop, multiply",
  difficulty: 15,
  thresholds: [15, 30],
  hp: 7,
  stress: 4,
  atk: "+3",
  weapon: {
    wpnName: "Ooze Appendage",
    wpnRange: "Melee",
    wpnDamage: "3d8+1 mag",
  },
  experiences: ["Blend In +3"],
  features: [
    {
      name: "Slow",
      type: "Passive",
      text: "When you spotlight the Ooze and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act.",
    },
    {
      name: "Acidic Form",
      type: "Passive",
      text: "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefi ts (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP.",
    },
    {
      name: "Envelop",
      type: "Action",
      text: "Make an attack against a target within Melee range. On a success, the Ooze Envelops them and the target must mark 2 Stress. While Enveloped, the target must mark an additional Stress every time they make an action roll. When the Ooze takes Severe damage, all Enveloped targets are freed and the condition is cleared.",
    },
    {
      name: "Split",
      type: "Reaction",
      text: "When the Ooze has 4 or more HP marked, you can spend a Fear to split them into two Green Oozes (with no marked HP or Stress). Immediately spotlight both of them.",
    },
  ],
};

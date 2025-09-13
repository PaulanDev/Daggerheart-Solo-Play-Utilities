export const GreenOoze = {
  name: "GREEN OOZE",
  tier: 1,
  type: "Skulk",
  desc: "A moving mound of translucent green slime.",
  motives: "Camouflage, consume and multiply, creep up, envelop",
  difficulty: 8,
  thresholds: [5, 10],
  hp: 5,
  stress: 2,
  atk: "+1",
  weapon: {
    wpnName: "Ooze Appendage",
    wpnRange: "Melee",
    wpnDamage: "1d6+1 mag",
  },
  experiences: ["Camouflage +3"],
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
      text: "Make a standard attack against a target within Melee range. On a success, the Ooze envelops them and the target must mark 2 Stress. The target must mark an additional Stress when they make an action roll. If the Ooze takes Severe damage, the target is freed.",
    },
    {
      name: "Split",
      type: "Reaction",
      text: "When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Green Oozes (with no marked HP or Stress). Immediately spotlight both of them.",
    },
  ],
};

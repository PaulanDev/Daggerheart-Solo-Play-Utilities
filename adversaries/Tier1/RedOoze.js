export const RedOoze = {
  name: "RED OOZE",
  tier: 1,
  type: "Skulk",
  desc: "A moving mound of translucent flaming red slime.",
  motives: "Camouflage, consume and multiply, ignite, start fires",
  difficulty: 10,
  thresholds: [6, 11],
  hp: 5,
  stress: 3,
  atk: "+1",
  weapon: {
    wpnName: "Ooze Appendage",
    wpnRange: "Melee",
    wpnDamage: "1d8+3 mag",
  },
  experiences: ["Camouflage +3"],
  features: [
    {
      name: "Creeping Fire",
      type: "Passive",
      text: "The Ooze can only move within Very Close range as their normal movement. They light any flammable object they touch on fire.",
    },
    {
      name: "Ignite",
      type: "Action",
      text: "Make an attack against a target within Very Close range. On a success, the target takes 1d8 magic damage and is Ignited until they’re extinguished with a successful Finesse Roll (14). While Ignited, the target takes 1d4 magic damage when they make an action roll.",
    },
    {
      name: "Split",
      type: "Reaction",
      text: "When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Red Oozes (with no marked HP or Stress). Immediately spotlight both of them.",
    },
  ],
};

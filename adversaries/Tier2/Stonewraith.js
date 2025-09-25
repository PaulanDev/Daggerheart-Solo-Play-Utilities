export const Stonewraith = {
  name: "STONEWRAITH",
  tier: 2,
  type: "Skulk",
  desc: "A prowling hunter, like a slinking mountain lion, with a slate-gray stone body.",
  motives: "Defend territory, isolate prey, stalk",
  difficulty: 13,
  thresholds: [11, 22],
  hp: 6,
  stress: 3,
  atk: "+3",
  weapon: {
    wpnName: "Bite and Claws",
    wpnRange: "Melee",
    wpnDamage: "2d8+6 phy",
  },
  experiences: ["Stonesense +3"],
  features: [
    {
      name: "Stonestrider",
      type: "Passive",
      text: "The Stonewraith can move through stone and earth as easily as air. While within stone or earth, they are Hidden and immune to all damage.",
    },
    {
      name: "Rocky Ambush",
      type: "Action",
      text: "While Hidden, mark a Stress to leap into Melee range with a target within Very Close range. The target must succeed on an Agility or Instinct Reaction Roll (15) or take 2d8 physical damage and become temporarily Restrained.",
    },
    {
      name: "Avalanche Roar",
      type: "Action",
      text: "Spend a Fear to roar while within a cave and cause a cave-in. All targets within Close range must succeed on an Agility Reaction Roll (14) or take 2d10 physical damage. The rubble can be cleared with a Progress Countdown (8).",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Stonewraith makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

export const OuterRealmsAbomination = {
  name: "OUTER REALMS ABOMINATION",
  tier: 4,
  type: "Bruiser",
  desc: "A chaotic mockery of life, constantly in flux.",
  motives: "Demolish, devour, undermine",
  difficulty: 19,
  thresholds: [35, 71],
  hp: 7,
  stress: 5,
  atk: "+2d4",
  weapon: {
    wpnName: "Massive Pseudopod",
    wpnRange: "Very Close",
    wpnDamage: "4d6+13 mag",
  },
  experiences: [],
  features: [
    {
      name: "Chaotic Form",
      type: "Passive",
      text: "When the Abomination attacks, roll 2d4 and use the result as their attack modifier.",
    },
    {
      name: "Disorienting Presence",
      type: "Passive",
      text: "When a target takes damage from the Abomination, they must make an Instinct Reaction Roll. On a failure, they gain disadvantage on their next action roll and you gain a Fear.",
    },
    {
      name: "Reality Quake",
      type: "Action",
      text: "Spend a Fear to rattle the edges of reality within Far range of the Abomination. All targets within that area must succeed on a Knowledge Reaction Roll or become Unstuck from reality until the end of the scene. When an Unstuck target spends Hope or marks Armor Slots, HP, or Stress, they must double the amount spent or marked.",
    },
    {
      name: "Unreal Form",
      type: "Reaction",
      text: "When the Abomination takes damage, reduce it by 1d20. If the Abomination marks 1 or fewer Hit Points from a successful attack against them, you gain a Fear.",
    },
  ],
};

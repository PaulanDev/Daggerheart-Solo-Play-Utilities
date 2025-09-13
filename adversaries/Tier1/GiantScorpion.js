export const GiantScorpion = {
  name: "GIANT SCORPION",
  tier: 1,
  type: "Bruiser",
  desc: "A human-sized insect with tearing claws and a stinging tail.",
  motives: "Ambush, feed, grapple, poison",
  difficulty: 13,
  thresholds: [7, 13],
  hp: 6,
  stress: 3,
  atk: "+1",
  weapon: { wpnName: "Pincers", wpnRange: "Melee", wpnDamage: "1d12+2 phy" },
  experiences: ["Camouflage +2"],
  features: [
    {
      name: "Double Strike",
      type: "Action",
      text: "Mark a Stress to make a standard attack against two targets within Melee range.",
    },
    {
      name: "Venomous Stinger",
      type: "Action",
      text: "Make an attack against a target within Very Close range. On a success, spend a Fear to deal 1d4+4 physical damage and Poison them until their next rest or they succeed on a Knowledge Roll (16). While Poisoned, the target must roll a d6 before they make an action roll. On a result of 4 or lower, they must mark a Stress.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Scorpion makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

export const EliteSoldier = {
  name: "ELITE SOLDIER",
  tier: 2,
  type: "Standard",
  desc: "An armored squire or experienced commoner looking to advance.",
  motives: "Gain glory, keep order, make alliances",
  difficulty: 15,
  thresholds: [9, 18],
  hp: 4,
  stress: 3,
  atk: "+1",
  weapon: { wpnName: "Spear", wpnRange: "Very Close", wpnDamage: "2d8+4 phy" },
  experiences: [],
  features: [
    {
      name: "Reinforce",
      type: "Action",
      text: "Mark a Stress to move into Melee range of an ally and make a standard attack against a target within Very Close range. On a success, deal 2d10+2 physical damage and the ally can clear a Stress.",
    },
    {
      name: "Vassal’s Loyalty",
      type: "Reaction",
      text: "When the Soldier is within Very Close range of a knight or other noble who would take damage, you can mark a Stress to move into Melee range of them and take the damage instead.",
    },
  ],
};

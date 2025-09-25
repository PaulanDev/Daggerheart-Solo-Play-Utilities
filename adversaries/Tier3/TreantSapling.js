export const TreantSapling = {
  name: "TREANT SAPLING",
  tier: 3,
  type: "Minion",
  desc: "A small, sentient tree sapling.",
  motives: "Blend in, preserve the forest, pummel, surround",
  difficulty: 14,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "+0",
  weapon: { wpnName: "Branches", wpnRange: "Melee", wpnDamage: "8 phy" },
  experiences: [],
  features: [
    {
      name: "Minion (6)",
      type: "Passive",
      text: "The Sapling is defeated when they take any damage. For every 6 damage a PC deals to the Sapling, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Treant Saplings within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 8 physical damage each. Combine this damage.",
    },
  ],
};

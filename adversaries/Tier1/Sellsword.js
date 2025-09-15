export const Sellsword = {
  name: "SELLSWORD",
  tier: 1,
  type: "Minion",
  desc: "An armed mercenary testing their luck.",
  motives: "Charge, lacerate, overwhelm, profit",
  difficulty: 10,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "+3",
  weapon: { wpnName: "Longsword", wpnRange: "Melee", wpnDamage: "3 phy" },
  experiences: [],
  features: [
    {
      name: "Minion (4)",
      type: "Passive",
      text: "The Sellsword is defeated when they take any damage. For every 4 damage a PC deals to the Sellsword, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Sellswords within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 3 physical damage each. Combine this damage.",
    },
  ],
};

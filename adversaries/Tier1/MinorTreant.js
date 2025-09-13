export const MinorTreant = {
  name: "MINOR TREANT",
  tier: 1,
  type: "Minion",
  desc: "An ambulatory sapling rising up to defend their forest.",
  motives: "Crush, overwhelm, protect",
  difficulty: 10,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "−2",
  weapon: { wpnName: "Clawed Branch", wpnRange: "Melee", wpnDamage: "4 phy" },
  experiences: [],
  features: [
    {
      name: "Minion (5)",
      type: "Passive",
      text: "The Treant is defeated when they take any damage. For every 5 damage a PC deals to the Treant, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Minor Treants within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage.",
    },
  ],
};

export const ElementalSpark = {
  name: "ELEMENTAL SPARK",
  tier: 3,
  type: "Minion",
  desc: "A blazing mote of elemental fire.",
  motives: "Blast, consume, gain mass",
  difficulty: 15,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "+0",
  weapon: { wpnName: "Bursts of Fire", wpnRange: "Close", wpnDamage: "5 mag" },
  experiences: [],
  features: [
    {
      name: "Minion (9)",
      type: "Passive",
      text: "The Elemental is defeated when they take any damage. For every 9 damage a PC deals to the Elemental, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Elemental Sparks within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage.",
    },
  ],
};

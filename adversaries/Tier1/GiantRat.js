export const GiantRat = {
  name: "GIANT RAT",
  tier: 1,
  type: "Minion",
  desc: "A cat-sized rodent skilled at scavenging and survival.",
  motives: "Burrow, hunger, scavenge, wear down",
  difficulty: 10,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "−4",
  weapon: { wpnName: "Claws", wpnRange: "Melee", wpnDamage: "1 phy" },
  experiences: ["Keen Senses +3"],
  features: [
    {
      name: "Minion (3)",
      type: "Passive",
      text: "The Rat is defeated when they take any damage. For every 3 damage a PC deals to the Rat, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Giant Rats within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage.",
    },
  ],
};

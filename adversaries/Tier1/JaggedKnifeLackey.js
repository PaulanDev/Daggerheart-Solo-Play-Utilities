export const JaggedKnifeLackey = {
  name: "JAGGED KNIFE LACKEY",
  tier: 1,
  type: "Minion",
  desc: "A thief with simple clothes and small daggers, eager to prove themselves.",
  motives: "Escape, profit, throw smoke",
  difficulty: 9,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "−2",
  weapon: { wpnName: "Daggers", wpnRange: "Melee", wpnDamage: "2 phy" },
  experiences: ["Thief +2"],
  features: [
    {
      name: "Minion (3)",
      type: "Passive",
      text: "The Lackey is defeated when they take any damage. For every 3 damage a PC deals to the Lackey, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Jagged Knife Lackeys within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage.",
    },
  ],
};

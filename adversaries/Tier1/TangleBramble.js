export const TangleBramble = {
  name: "TANGLE BRAMBLE",
  tier: 1,
  type: "Minion",
  desc: "An animate, blood-drinking tumbleweed.",
  motives: "Combine, drain, entangle",
  difficulty: 11,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "−1",
  weapon: { wpnName: "Thorns", wpnRange: "Melee", wpnDamage: "2 phy" },
  experiences: [],
  features: [
    {
      name: "Minion (4)",
      type: "Passive",
      text: "The Bramble is defeated when they take any damage. For every 4 damage a PC deals to the Tangle Bramble, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Tangle Brambles within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage.",
    },
    {
      name: "Drain and Multiply",
      type: "Reaction",
      text: "When an attack from the Bramble causes a target to mark HP and there are three or more Tangle Bramble Minions within Close range, you can combine the Minions into a Tangle Bramble Swarm Horde. The Horde’s HP is equal to the number of Minions combined.",
    },
  ],
};

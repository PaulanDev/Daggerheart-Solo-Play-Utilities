export const JaggedKnifeLieutenant = {
  name: "JAGGED KNIFE LIEUTENANT",
  tier: 1,
  type: "Leader",
  desc: "A seasoned bandit in quality leathers with a strong voice and cunning eyes.",
  motives: "Bully, command, profit, reinforce",
  difficulty: 13,
  thresholds: [7, 14],
  hp: 6,
  stress: 3,
  atk: "+2",
  weapon: { wpnName: "Javelin", wpnRange: "Close", wpnDamage: "1d8+3 phy" },
  experiences: ["Local Knowledge +2"],
  features: [
    {
      name: "Tactician",
      type: "Action",
      text: "When you spotlight the Lieutenant, mark a Stress to also spotlight two allies within Close range.",
    },
    {
      name: "More Where That Came From",
      type: "Action",
      text: "Summon three Jagged Knife Lackeys, who appear at Far range.",
    },
    {
      name: "Coup de Grace",
      type: "Action",
      text: "Spend a Fear to make an attack against a Vulnerable target within Close range. On a success, deal 2d6+12 physical damage and the target must mark a Stress.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Lieutenant makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

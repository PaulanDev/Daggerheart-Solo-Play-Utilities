export const Kraken = {
  name: "KRAKEN",
  tier: 4,
  type: "Solo",
  desc: "A legendary beast of the sea, bigger than the largest galleon, with sucker-laden tentacles and a terrifying maw.",
  motives: "Consume, crush, drown, grapple",
  difficulty: 20,
  thresholds: [35, 70],
  hp: 11,
  stress: 8,
  atk: "+7",
  weapon: { wpnName: "Tentacles", wpnRange: "Close", wpnDamage: "4d12+10 phy" },
  experiences: ["Swimming +3"],
  features: [
    {
      name: "Relentless (3)",
      type: "Passive",
      text: "The Kraken can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Many Tentacles",
      type: "Passive",
      text: "While the Kraken has 7 or fewer marked HP, they can make their standard attack against two targets within range.",
    },
    {
      name: "Grapple and Drown",
      type: "Action",
      text: "Make an attack roll against a target within Close range. On a success, mark a Stress to grab them with a tentacle and drag them beneath the water. The target is Restrained and Vulnerable until they break free with a successful Strength Roll or the Kraken takes Major or greater damage. While Restrained and Vulnerable in this way, a target must mark a Stress when they make an action roll.",
    },
    {
      name: "Boiling Blast",
      type: "Action",
      text: "Spend a Fear to spew a line of boiling water at any number of targets in a line up to Far range. All targets must succeed on an Agility Reaction Roll or take 4d6+9 physical damage. If a target marks an Armor Slot to reduce the damage, they must also mark a Stress.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Kraken makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

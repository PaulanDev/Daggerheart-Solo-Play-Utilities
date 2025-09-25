export const GiantBrawler = {
  name: "GIANT BRAWLER",
  tier: 2,
  type: "Bruiser",
  desc: "An especially muscular giant wielding a warhammer larger than a human.",
  motives: "Make a living, overwhelm, slam, topple",
  difficulty: 15,
  thresholds: [14, 28],
  hp: 7,
  stress: 4,
  atk: "+2",
  weapon: {
    wpnName: "Warhammer",
    wpnRange: "Very Close",
    wpnDamage: "2d12+3 phy",
  },
  experiences: ["Intrusion +2"],
  features: [
    {
      name: "Battering Ram",
      type: "Action",
      text: "Mark a Stress to have the Brawler charge at an inanimate object within Close range they could feasibly smash (such as a wall, cart, or market stand) and destroy it. All targets within Very Close range of the object must succeed on an Agility Reaction Roll or take 2d4+3 physical damage from the shrapnel.",
    },
    {
      name: "Bloody Reprisal",
      type: "Reaction",
      text: "When the Brawler marks 2 or more HP from an attack within Very Close range, you can make a standard attack against the attacker. On a success, the Brawler deals 2d6+15 physical damage instead of their standard damage.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Brawler makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

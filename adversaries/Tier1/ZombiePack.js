export const ZombiePack = {
  name: "ZOMBIE PACK",
  tier: 1,
  type: "Horde",
  desc: "(2/HP) A group of shambling corpses instinctively moving together.",
  motives: "Consume flesh, hunger, maul",
  difficulty: 8,
  thresholds: [6, 12],
  hp: 6,
  stress: 3,
  atk: "−1",
  weapon: { wpnName: "Bite", wpnRange: "Melee", wpnDamage: "1d10+2 phy" },
  experiences: [],
  features: [
    {
      name: "Horde (1d4+2)",
      type: "Passive",
      text: "When the Zombies have marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead.",
    },
    {
      name: "Overwhelm",
      type: "Reaction",
      text: "When the Zombies mark HP from an attack within Melee range, you can mark a Stress to make a standard attack against the attacker.",
    },
  ],
};

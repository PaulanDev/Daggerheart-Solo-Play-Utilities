export const ZombieLegion = {
  name: "ZOMBIE LEGION",
  tier: 4,
  type: "Horde",
  desc: "(3/HP) A large pack of undead, still powerful despite their rotting flesh.",
  motives: "Consume brain, shred flesh, surround",
  difficulty: 17,
  thresholds: [25, 45],
  hp: 8,
  stress: 5,
  atk: "+2",
  weapon: { wpnName: "Tentacles", wpnRange: "Close", wpnDamage: "4d6+10 phy" },
  experiences: [],
  features: [
    {
      name: "Horde (2d6+5)",
      type: "Passive",
      text: "When the Legion has marked half or more of their HP, their standard attack deals 2d6+5 physical damage instead.",
    },
    {
      name: "Unyielding",
      type: "Passive",
      text: "The Legion has resistance to physical damage.",
    },
    {
      name: "Relentless (2)",
      type: "Passive",
      text: "The Legion can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Overwhelm",
      type: "Reaction",
      text: "When the Legion takes Minor damage from an attack within Melee range, you can mark a Stress to make a standard attack with advantage against the attacker.",
    },
  ],
};

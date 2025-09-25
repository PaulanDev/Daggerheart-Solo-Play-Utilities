export const VolcanicDragonObsidianPredator = {
  name: "VOLCANIC DRAGON: OBSIDIAN PREDATOR",
  tier: 4,
  type: "Solo",
  desc: "A massive winged creature with obsidian scales and impossibly sharp claws.",
  motives: "Defend lair, dive-bomb, fly, hunt, intimidate",
  difficulty: 19,
  thresholds: [33, 65],
  hp: 6,
  stress: 5,
  atk: "+8",
  weapon: {
    wpnName: "Obsidian Claws",
    wpnRange: "Close",
    wpnDamage: "4d10+4 phy",
  },
  experiences: ["Hunt from Above +5"],
  features: [
    {
      name: "Relentless (2)",
      type: "Passive",
      text: "The Obsidian Predator can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Flying",
      type: "Passive",
      text: "While flying, the Obsidian Predator gains a +3 bonus to their Difficulty.",
    },
    {
      name: "Obsidian Scales",
      type: "Passive",
      text: "The Obsidian Predator is resistant to physical damage.",
    },
    {
      name: "Avalanche Tail",
      type: "Action",
      text: "Mark a Stress to make an attack against all targets within Close range. Targets the Obsidian Predator succeeds against take 4d6+4 physical damage and are knocked back to Far range and Vulnerable until their next roll with Hope.",
    },
    {
      name: "Dive-Bomb",
      type: "Action",
      text: "If the Obsidian Predator is flying, mark a Stress to choose a point within Far range. Move to that point and make an attack against all targets within Very Close range. Targets the Obsidian Predator succeeds against take 2d10+6 physical damage and must mark a Stress and lose a Hope.",
    },
    {
      name: "Erupting Rage (Phase Change)",
      type: "Reaction",
      text: "When the Obsidian Predator marks their last HP, replace them with the Molten Scourge and immediately spotlight them.",
    },
  ],
};

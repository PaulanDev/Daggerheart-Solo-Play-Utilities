export const MinorDemon = {
  name: "MINOR DEMON",
  tier: 1,
  type: "Solo",
  desc: "A crimson-hued creature from the Circles Below, consumed by rage against all mortals.",
  motives: "Act erratically, corral targets, relish pain, torment",
  difficulty: 14,
  thresholds: [8, 15],
  hp: 8,
  stress: 4,
  atk: "+3",
  weapon: { wpnName: "Claws", wpnRange: "Melee", wpnDamage: "1d8+6 phy" },
  experiences: [],
  features: [
    {
      name: "Relentless (2)",
      type: "Passive",
      text: "The Demon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "All Must Fall",
      type: "Passive",
      text: "When a PC rolls a failure with Fear while within Close range of the Demon, they lose a Hope.",
    },
    {
      name: "Hellfire",
      type: "Action",
      text: "Spend a Fear to rain down hellfire within Far range. All targets within the area must make an Agility Reaction Roll. Targets who fail take 1d20+3 magic damage. Targets who succeed take half damage.",
    },
    {
      name: "Reaper",
      type: "Reaction",
      text: "Before rolling damage for the Demon’s attack, you can mark a Stress to gain a bonus to the damage roll equal to the Demon’s current number of marked HP.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Demon makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

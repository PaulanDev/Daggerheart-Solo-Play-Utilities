export const MinorFireElemental = {
  name: "MINOR FIRE ELEMENTAL",
  tier: 1,
  type: "Solo",
  desc: "A living flame the size of a large bonfire.",
  motives: "Encircle enemies, grow in size, intimidate, start fires",
  difficulty: 13,
  thresholds: [7, 15],
  hp: 9,
  stress: 3,
  atk: "+3",
  weapon: {
    wpnName: "Elemental Blast",
    wpnRange: "Far",
    wpnDamage: "1d10+4 mag",
  },
  experiences: [],
  features: [
    {
      name: "Relentless (2)",
      type: "Passive",
      text: "The Elemental can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Scorched Earth",
      type: "Action",
      text: "Mark a Stress to choose a point within Far range. The ground within Very Close range of that point immediately bursts into flames. All creatures within this area must make an Agility Reaction Roll. Targets who fail take 2d8 magic damage from the flames. Targets who succeed take half damage.",
    },
    {
      name: "Explosion",
      type: "Action",
      text: "Spend a Fear to erupt in a fiery explosion. Make an attack against all targets within Close range. Targets the Elemental succeeds against take 1d8 magic damage and are knocked back to Far range.",
    },
    {
      name: "Consume Kindling",
      type: "Reaction",
      text: "Three times per scene, when the Elemental moves onto objects that are highly flammable, consume them to clear a HP or a Stress.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Elemental makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

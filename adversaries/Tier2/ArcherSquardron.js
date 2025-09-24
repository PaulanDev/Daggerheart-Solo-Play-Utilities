export const ArcherSquadron = {
  name: "ARCHER SQUADRON",
  tier: 2,
  type: "Horde",
  desc: "(2/HP) A group of trained archers bearing massive bows.",
  motives: "Stick together, survive, volley fire",
  difficulty: 13,
  thresholds: [8, 16],
  hp: 4,
  stress: 3,
  atk: "+0",
  weapon: { wpnName: "Longbow", wpnRange: "Far", wpnDamage: "2d6+3 phy" },
  experiences: [],
  features: [
    {
      name: "Horde (1d+3)",
      type: "Passive",
      text: "When the Squadron has marked half or more of their HP, their standard attack deals 1d6+3 physical damage instead.",
    },
    {
      name: "Focused Volley",
      type: "Action",
      text: "Spend a Fear to target a point within Far range. Make an attack with advantage against all targets within Close range of that point. Targets the Squadron succeeds against take 1d10+4 physical damage.",
    },
    {
      name: "Suppressing Fire",
      type: "Action",
      text: "Mark a Stress to target a point within Far range. Until the next roll with Fear, a creature who moves within Close range of that point must make an Agility Reaction Roll. On a failure, they take 2d6+3 physical damage. On a success, they take half damage.",
    },
  ],
};

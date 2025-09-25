export const Siren = {
  name: "SIREN",
  tier: 2,
  type: "Skulk",
  desc: "A half-fish person with shimmering scales and an irresistible voice.",
  motives: "Consume, lure prey, subdue with song",
  difficulty: 14,
  thresholds: [9, 18],
  hp: 5,
  stress: 3,
  atk: "+2",
  weapon: {
    wpnName: "Distended Jaw Bite",
    wpnRange: "Melee",
    wpnDamage: "2d6+3 phy",
  },
  experiences: ["Song Repertoire +3"],
  features: [
    {
      name: "Captive Audience",
      type: "Passive",
      text: "If the Siren makes a standard attack against a target Entranced by their song, the attack deals 2d10+1 damage instead of their standard damage.",
    },
    {
      name: "Enchanting Song",
      type: "Action",
      text: "Spend a Fear to sing a song that aff ects all targets within Close range. Targets must succeed on an Instinct Reaction Roll or become Entranced until they mark 2 Stress. Other Sirens within Close range of the target can mark a Stress to each add a +1 bonus to the Difficulty of the reaction roll. While Entranced, a target can’t act and is Vulnerable. ",
    },
  ],
};

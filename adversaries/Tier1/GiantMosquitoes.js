export const GiantMosquitoes = {
  name: "GIANT MOSQUITOES",
  tier: 1,
  type: "Horde",
  desc: "(5/HP) Dozens of fi st-sized mosquitoes, fl ying together for protection.",
  motives: "Fly away, harass, steal blood",
  difficulty: 10,
  thresholds: [5, 9],
  hp: 6,
  stress: 3,
  atk: "−2",
  weapon: { wpnName: "Proboscis", wpnRange: "Melee", wpnDamage: "1d8+3 phy" },
  experiences: ["Camouflage +2"],
  features: [
    {
      name: "Horde (1d4+1)",
      type: "Passive",
      text: "When the Mosquitoes have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead.",
    },
    {
      name: "Flying",
      type: "Passive",
      text: "While flying, the Mosquitoes have a +2 bonus to their Difficulty.",
    },
    {
      name: "Bloodsucker",
      type: "Reaction",
      text: "When the Mosquitoes’ attack causes a target to mark HP, you can mark a Stress to force the target to mark an additional HP.",
    },
  ],
};

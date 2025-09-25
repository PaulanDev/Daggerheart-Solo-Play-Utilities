export const ElectricEels = {
  name: "ELECTRIC EELS",
  tier: 2,
  type: "Horde",
  desc: "(2/HP) A swarm of eels that encircle and electrocute.",
  motives: "Avoid larger predators, shock prey, tear apart",
  difficulty: 14,
  thresholds: [10, 20],
  hp: 5,
  stress: 3,
  atk: "+0",
  weapon: {
    wpnName: "Shocking Bite",
    wpnRange: "Melee",
    wpnDamage: "2d6+4 phy",
  },
  experiences: [],
  features: [
    {
      name: "Horde (2d4+1)",
      type: "Passive",
      text: "When the Eels have marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead.",
    },
    {
      name: "Paralyzing Shock",
      type: "Action",
      text: "Mark a Stress to make a standard attack against all targets within Very Close range. You gain a Fear for each target that marks HP.",
    },
  ],
};

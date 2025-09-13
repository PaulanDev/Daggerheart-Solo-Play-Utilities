export const MinorChaosElemental = {
  name: "MINOR CHAOS ELEMENTAL",
  tier: 1,
  type: "Solo",
  desc: "A coruscating mass of uncontrollable magic.",
  motives: "Confound, destabilize, transmogrify",
  difficulty: 14,
  thresholds: [7, 14],
  hp: 7,
  stress: 3,
  atk: "+3",
  weapon: { wpnName: "Warp Blast", wpnRange: "Close", wpnDamage: "1d12+6 mag" },
  experiences: [],
  features: [
    {
      name: "Arcane Form",
      type: "Passive",
      text: "The Elemental is resistant to magic damage.",
    },
    {
      name: "Sickening Flux",
      type: "Action",
      text: "Mark a HP to force all targets within Close range to mark a Stress and become Vulnerable until their next rest or they clear a HP.",
    },
    {
      name: "Remake Reality",
      type: "Action",
      text: "Spend a Fear to transform the area within Very Close range into a diff erent biome. All targets within this area take 2d6+3 direct magic damage.",
    },
    {
      name: "Magical Refl ection",
      type: "Reaction",
      text: "When the Elemental takes damage from an attack within Close range, deal an amount of damage to the attacker equal to half the damage they dealt.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Elemental makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

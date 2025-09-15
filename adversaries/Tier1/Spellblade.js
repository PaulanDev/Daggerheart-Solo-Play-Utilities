export const Spellblade = {
  name: "SPELLBLADE",
  tier: 1,
  type: "Leader",
  desc: "A mercenary combining swordplay and magic to deadly effect.",
  motives: "Blast, command, endure",
  difficulty: 14,
  thresholds: [8, 14],
  hp: 6,
  stress: 3,
  atk: "+3",
  weapon: {
    wpnName: "Empowered Longsword",
    wpnRange: "Melee",
    wpnDamage: "1d8+4 phy/mag",
  },
  experiences: ["Magical Knowledge +2"],
  features: [
    {
      name: "Arcane Steel",
      type: "Passive",
      text: "Damage dealt by the Spellblade’s standard attack is considered both physical and magic.",
    },
    {
      name: "Suppressing Blast",
      type: "Action",
      text: "Mark a Stress and target a group within Far range. All targets must succeed on an Agility Reaction Roll or take 1d8+2 magic damage. You gain a Fear for each target who marked HP from this attack.",
    },
    {
      name: "Move as a Unit",
      type: "Action",
      text: "Spend 2 Fear to spotlight up to five allies within Far range.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Spellblade makes a successful attack against a PC, you gain a Fear",
    },
  ],
};

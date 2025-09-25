export const GreaterWaterElemental = {
  name: "GREATER WATER ELEMENTAL",
  tier: 3,
  type: "Support",
  desc: "A huge living wave that crashes down upon enemies.",
  motives: "Deluge, disperse, drown",
  difficulty: 17,
  thresholds: [17, 34],
  hp: 5,
  stress: 5,
  atk: "+3",
  weapon: {
    wpnName: "Crashing Wave",
    wpnRange: "Very Close",
    wpnDamage: "3d4+1 mag",
  },
  experiences: [],
  features: [
    {
      name: "Water Jet",
      type: "Action",
      text: "Mark a Stress to attack a target within Very Close range. On a success, deal 2d4+7 physical damage and the target’s next action has disadvantage. On a failure, the target must mark a Stress.",
    },
    {
      name: "Drowning Embrace",
      type: "Action",
      text: "Spend a Fear to make an attack against all targets within Very Close range. Targets the Elemental succeeds against become Restrained and Vulnerable as they begin drowning. A target can break free, ending both conditions, with a successful Strength or Instinct Roll.",
    },
    {
      name: "High Tide",
      type: "Reaction",
      text: "When the Elemental makes a successful standard attack, you can mark a Stress to knock the target back to Close range.",
    },
  ],
};

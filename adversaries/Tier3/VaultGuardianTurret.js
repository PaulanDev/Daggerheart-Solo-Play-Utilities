export const VaultGuardianTurret = {
  name: "VAULT GUARDIAN TURRET",
  tier: 3,
  type: "Ranged",
  desc: "A massive living turret with reinforced armor and twelve piston-driven mechanical legs.",
  motives: "Concentrate fire, lock down, mark, protect",
  difficulty: 16,
  thresholds: [20, 32],
  hp: 5,
  stress: 4,
  atk: "+3",
  weapon: {
    wpnName: "Magitech Cannon",
    wpnRange: "Far",
    wpnDamage: "3d10+3 mag",
  },
  experiences: [],
  features: [
    {
      name: "Slow Firing",
      type: "Passive",
      text: "When you spotlight the Turret and they don’t have a token on their stat block, they can’t make a standard attack. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Turret and they have a token on their stat block, clear the token and they can attack.",
    },
    {
      name: "Mark Target",
      type: "Action",
      text: "Spend a Fear to Mark a target within Far range until the Turret is destroyed or the Marked target becomes Hidden. While the target is Marked, their Evasion is halved.",
    },
    {
      name: "Concentrate Fire",
      type: "Reaction",
      text: "When another adversary deals damage to a target within Far range of the Turret, you can mark a Stress to add the Turret’s standard attack damage to the damage roll.",
    },
    {
      name: "Detonation",
      type: "Reaction",
      text: "When the Turret is destroyed, they explode. All targets within Close range must make an Agility Reaction Roll. Targets who fail take 3d20 physical damage. Targets who succeed take half damage.",
    },
  ],
};

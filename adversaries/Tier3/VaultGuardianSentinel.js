export const VaultGuardianSentinel = {
  name: "VAULT GUARDIAN SENTINEL",
  tier: 3,
  type: "Bruiser",
  desc: "A dust-covered golden construct with boxy limbs and a huge mace for a hand.",
  motives: "Destroy at any cost, expunge, protect",
  difficulty: 17,
  thresholds: [21, 40],
  hp: 6,
  stress: 3,
  atk: "+3",
  weapon: {
    wpnName: "Charged Mace",
    wpnRange: "Very Close",
    wpnDamage: "2d12+1 phy",
  },
  experiences: [],
  features: [
    {
      name: "Kinetic Slam",
      type: "Passive",
      text: "Targets who take damage from the Sentinel’s standard attack are knocked back to Very Close range.",
    },
    {
      name: "Box In",
      type: "Action",
      text: "Mark a Stress to choose a target within Very Close range to focus on. That target has disadvantage on attack rolls when they’re within Very Close range of the Sentinel. The Sentinel can only focus on one target at a time.",
    },
    {
      name: "Mana Bolt",
      type: "Action",
      text: "Spend a Fear to lob explosive magic at a point within Far range. All targets within Very Close range of that point must make an Agility Reaction Roll. Targets who fail take 2d8+20 magic damage and are knocked back to Close range. Targets who succeed take half damage and aren’t knocked back.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Sentinel makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

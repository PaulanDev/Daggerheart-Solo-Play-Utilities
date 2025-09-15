export const SkeletonArcher = {
  name: "SKELETON ARCHER",
  tier: 1,
  type: "Ranged",
  desc: "A fragile skeleton with a shortbow and arrows.",
  motives: "Perforate distracted targets, play dead, steal skin",
  difficulty: 9,
  thresholds: [4, 7],
  hp: 3,
  stress: 2,
  atk: "+2",
  weapon: { wpnName: "Shortbow", wpnRange: "Far", wpnDamage: "1d8+1 phy" },
  experiences: [],
  features: [
    {
      name: "Opportunist",
      type: "Passive",
      text: "When two or more adversaries are within Very Close range of a creature, all damage the Archer deals to that creature is doubled.",
    },
    {
      name: "Deadly Shot",
      type: "Action",
      text: "Make an attack against a Vulnerable target within Far range. On a success, mark a Stress to deal 3d4+8 physical damage.",
    },
  ],
};

export const ArcherGuard = {
  name: "ARCHER GUARD",
  tier: 1,
  type: "Ranged",
  desc: "A tall guard bearing a longbow and quiver with arrows fletched in the settlement’s colors.",
  motives: "Arrest, close gates, make it through the day, pin down",
  difficulty: 10,
  thresholds: [4, 8],
  hp: 3,
  stress: 2,
  atk: "+1",
  weapon: { wpnName: "Longbow", wpnRange: "Far", wpnDamage: "1d8+3 phy" },
  experiences: ["Local Knowledge +3"],
  features: [
    {
      name: "Hobbling Shot",
      type: "Action",
      text: "Make an attack against a target within Far range. On a success, mark a Stress to deal 1d12+3 physical damage. If the target marks HP from this attack, they have disadvantage on Agility Rolls until they clear at least 1 HP.",
    },
  ],
};

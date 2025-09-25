export const SpectralArcher = {
  name: "SPECTRAL ARCHER",
  tier: 2,
  type: "Ranged",
  desc: "A ghostly fighter with an ethereal bow, unable to move on while their charge is vulnerable.",
  motives:
    "Move through solid objects, stay out of the fray, rehash old battles",
  difficulty: 13,
  thresholds: [6, 14],
  hp: 3,
  stress: 3,
  atk: "+3",
  weapon: { wpnName: "Longbow", wpnRange: "Far", wpnDamage: "2d10+2 phy" },
  experiences: ["Ancient Knowledge +2"],
  features: [
    {
      name: "Ghost",
      type: "Passive",
      text: "The Archer has resistance to physical damage. Mark a Stress to move up to Close range through solid objects.",
    },
    {
      name: "Pick Your Target",
      type: "Action",
      text: "Spend a Fear to make an attack within Far range against a PC who is within Very Close range of at least two other PCs. On a success, the target takes 2d8+12 physical damage. ",
    },
  ],
};

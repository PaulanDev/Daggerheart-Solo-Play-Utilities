export const SpectralGuardian = {
  name: "SPECTRAL GUARDIAN",
  tier: 2,
  type: "Standard",
  desc: "A ghostly fighter with spears and swords, anchored by duty.",
  motives: "Move through solid objects, protect treasure, rehash old battles",
  difficulty: 15,
  thresholds: [7, 15],
  hp: 4,
  stress: 3,
  atk: "+1",
  weapon: { wpnName: "Spear", wpnRange: "Very Close", wpnDamage: "2d8+1 phy" },
  experiences: ["Ancient Knowledge +2"],
  features: [
    {
      name: "Ghost",
      type: "Passive",
      text: "The Guardian has resistance to physical damage. Mark a Stress to move up to Close range through solid objects.",
    },
    {
      name: "Grave Blade",
      type: "Action",
      text: "Spend a Fear to make an attack against a target within Very Close range. On a success, deal 2d10+6 physical damage and the target must mark a Stress.",
    },
  ],
};

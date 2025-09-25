export const SpectralCaptain = {
  name: "SPECTRAL CAPTAIN",
  tier: 2,
  type: "Leader",
  desc: "A ghostly commander leading their troops beyond death.",
  motives: "Move through solid objects, rally troops, rehash old battles",
  difficulty: 16,
  thresholds: [13, 26],
  hp: 6,
  stress: 4,
  atk: "+3",
  weapon: { wpnName: "Longbow", wpnRange: "Far", wpnDamage: "2d10+3 phy" },
  experiences: ["Ancient Knowledge +3"],
  features: [
    {
      name: "Ghost",
      type: "Passive",
      text: "The Captain has resistance to physical damage.",
    },
    {
      name: "Unending Battle",
      type: "Action",
      text: "Spend 2 Fear to return up to 1d4+1 defeated Spectral allies to the battle at the points where they fi rst appeared (with no marked HP or Stress).",
    },
    {
      name: "Hold Fast",
      type: "Reaction",
      text: "When the Captain’s Spectral allies are forced to make a reaction roll, you can mark a Stress to give those allies a +2 bonus to the roll.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Captain makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

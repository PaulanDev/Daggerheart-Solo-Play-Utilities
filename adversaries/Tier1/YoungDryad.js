export const YoungDryad = {
  name: "YOUNG DRYAD",
  tier: 1,
  type: "Leader",
  desc: "An imperious tree-person leading their forest’s defenses.",
  motives: "Command, nurture, prune the unwelcome",
  difficulty: 11,
  thresholds: [6, 11],
  hp: 6,
  stress: 2,
  atk: "+0",
  weapon: { wpnName: "Scythe", wpnRange: "Melee", wpnDamage: "1d8+5 phy" },
  experiences: ["Leadership +3"],
  features: [
    {
      name: "Voice of the Forest",
      type: "Action",
      text: "Mark a Stress to spotlight 1d4 allies within range of a target they can attack without moving. On a success, their attacks deal half damage.",
    },
    {
      name: "Thorny Cage",
      type: "Action",
      text: "Spend a Fear to form a cage around a target within Very Close range and Restrain them until they’re freed with a successful Strength Roll. When a creature makes an action roll against the cage, they must mark a Stress.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Dryad makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

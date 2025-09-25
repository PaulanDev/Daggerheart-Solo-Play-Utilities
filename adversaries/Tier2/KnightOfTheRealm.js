export const KnightOfTheRealm = {
  name: "KNIGHT OF THE REALM",
  tier: 2,
  type: "Leader",
  desc: "A decorated soldier with heavy armor and a powerful steed.",
  motives: "Run down, seek glory, show dominance",
  difficulty: 15,
  thresholds: [13, 26],
  hp: 6,
  stress: 4,
  atk: "+4",
  weapon: { wpnName: "Longsword", wpnRange: "Melee", wpnDamage: "2d10+4 phy" },
  experiences: ["Ancient Knowledge +3", "High Society +2", "Tactics +2"],
  features: [
    {
      name: "Chevalier",
      type: "Passive",
      text: "While the Knight is on a mount, they gain a +2 bonus to their Difficulty. When they take Severe damage, they’re knocked from their mount and lose this benefit until they’re next spotlighted.",
    },
    {
      name: "Heavily Armored",
      type: "Passive",
      text: "When the Knight takes physical damage, reduce it by 3.",
    },
    {
      name: "Cavalry Charge",
      type: "Action",
      text: "If the Knight is mounted, move up to Far range and make a standard attack against a target. On a success, deal 2d8+4 physical damage and the target must mark a Stress.",
    },
    {
      name: "For the Realm!",
      type: "Action",
      text: "Mark a Stress to spotlight 1d4+1 allies. Attacks they make while spotlighted in this way deal half damage.",
    },
  ],
};

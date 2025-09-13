export const JaggedKnifeShadow = {
  name: "JAGGED KNIFE SHADOW",
  tier: 1,
  type: "Skulk",
  desc: "A nimble scoundrel bearing a wicked knife and utilizing shadow magic to isolate targets.",
  motives: "Ambush, conceal, divide, profit",
  difficulty: 12,
  thresholds: [4, 8],
  hp: 3,
  stress: 3,
  atk: "+1",
  weapon: { wpnName: "Daggers", wpnRange: "Melee", wpnDamage: "1d4+4 phy" },
  experiences: ["Intrusion +3"],
  features: [
    {
      name: "Backstab",
      type: "Passive",
      text: "When the Shadow succeeds on a standard attack that has advantage, they deal 1d6+6 physical damage instead of their standard damage.",
    },
    {
      name: "Cloaked",
      type: "Action",
      text: "Become Hidden until after the Shadow’s next attack. Attacks made while Hidden from this feature have advantage.",
    },
  ],
};

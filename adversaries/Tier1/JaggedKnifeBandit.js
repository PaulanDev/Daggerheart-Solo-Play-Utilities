export const JaggedKnifeBandit = {
  name: "JAGGED KNIFE BANDIT",
  tier: 1,
  type: "Standard",
  desc: "A cunning criminal in a cloak bearing one of the gang’s iconic knives.",
  motives: "Escape, profit, steal, throw smoke",
  difficulty: 12,
  thresholds: [8, 14],
  hp: 5,
  stress: 3,
  atk: "+1",
  weapon: { wpnName: "Daggers", wpnRange: "Melee", wpnDamage: "1d8+1 phy" },
  experiences: ["Thief +2"],
  features: [
    {
      name: "Climber",
      type: "Passive",
      text: "The Bandit climbs just as easily as they run.",
    },
    {
      name: "From Above",
      type: "Passive",
      text: "When the Bandit succeeds on a standard attack from above a target, they deal 1d10+1 physical damage instead of their standard damage.",
    },
  ],
};

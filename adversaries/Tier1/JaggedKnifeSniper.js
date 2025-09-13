export const JaggedKnifeSniper = {
  name: "JAGGED KNIFE SNIPER",
  tier: 1,
  type: "Ranged",
  desc: "A lanky bandit striking from cover with a shortbow.",
  motives: "Ambush, hide, profit, reposition",
  difficulty: 13,
  thresholds: [4, 7],
  hp: 3,
  stress: 2,
  atk: "−1",
  weapon: { wpnName: "Shortbow", wpnRange: "Far", wpnDamage: "1d10+2 phy" },
  experiences: ["Stealth +2"],
  features: [
    {
      name: "Unseen Strike",
      type: "Passive",
      text: "If the Sniper is Hidden when they make a successful standard attack against a target, they deal 1d10+4 physical damage instead of their standard damage.",
    },
  ],
};

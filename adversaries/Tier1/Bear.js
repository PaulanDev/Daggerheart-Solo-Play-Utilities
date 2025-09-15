export const Bear = {
  name: "BEAR",
  tier: 1,
  type: "Bruiser",
  desc: "A large bear with thick fur and powerful claws.",
  motives: "Climb, defend territory, pummel, track",
  difficulty: 14,
  thresholds: [9, 17],
  hp: 7,
  stress: 2,
  atk: "+1",
  weapon: { wpnName: "Claws", wpnRange: "Melee", wpnDamage: "1d8+3 phy" },
  experiences: ["Ambusher +3", "Keen Senses +2"],
  features: [
    {
      name: "Overwhelming Force",
      type: "Passive",
      text: "Targets who mark HP from the Bear’s standard attack are knocked back to Very Close range.",
    },
    {
      name: "Bite",
      type: "Action",
      text: "Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 physical damage and the target is Restrained until they break free with a successful Strength Roll.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Bear makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

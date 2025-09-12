export const DireWolf = {
  name: "DIRE WOLF",
  tier: 1,
  type: "Skulk",
  desc: "A large wolf with menacing teeth, seldom encountered alone.",
  motives: "Defend territory, harry, protect pack, surround, trail",
  difficulty: 12,
  thresholds: [5, 9],
  hp: 4,
  stress: 3,
  atk: "+2",
  weapon: { wpnName: "Claws", wpnRange: "Melee", wpnDamage: "1d6+2 phy" },
  experiences: ["Keen Senses +3"],
  features: [
    {
      name: "Pack Tactics",
      type: "Passive",
      text: "If the Wolf makes a successful standard attack and another Dire Wolf is within Melee range of the target, deal 1d6+5 physical damage instead of their standard damage and you gain a Fear.",
    },
    {
      name: "Hobbling Strike",
      type: "Action",
      text: "Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 direct physical damage and make them Vulnerable until they clear at least 1 HP.",
    },
  ],
};

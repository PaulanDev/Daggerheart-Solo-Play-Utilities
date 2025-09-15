export const SylvanSoldier = {
  name: "SYLVAN SOLDIER",
  tier: 1,
  type: "Standard",
  desc: "A faerie warrior adorned in armor made of leaves and bark.",
  motives: "Ambush, hide, overwhelm, protect, trail",
  difficulty: 11,
  thresholds: [6, 11],
  hp: 4,
  stress: 2,
  atk: "+0",
  weapon: { wpnName: "Scythe", wpnRange: "Melee", wpnDamage: "1d8+1 phy" },
  experiences: ["Tracker +2"],
  features: [
    {
      name: "Pack Tactics",
      type: "Passive",
      text: "If the Soldier makes a standard attack and another Sylvan Soldier is within Melee range of the target, deal 1d8+5 physical damage instead of their standard damage.",
    },
    {
      name: "Forest Control",
      type: "Action",
      text: "Spend a Fear to pull down a tree within Close range. A creature hit by the tree must succeed on an Agility Reaction Roll (15) or take 1d10 physical damage.",
    },
    {
      name: "Blend In",
      type: "Reaction",
      text: "When the Soldier makes a successful attack, you can mark a Stress to become Hidden until the Soldier’s next attack or a PC succeeds on an Instinct Roll (14) to find them.",
    },
  ],
};

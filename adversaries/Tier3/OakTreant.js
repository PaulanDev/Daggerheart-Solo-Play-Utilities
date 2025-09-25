export const OakTreant = {
  name: "OAK TREANT",
  tier: 3,
  type: "Bruiser",
  desc: "A sturdy animate old-growth tree.",
  motives:
    "Hide in plain sight, preserve the forest, root down, swing branches",
  difficulty: 17,
  thresholds: [22, 40],
  hp: 7,
  stress: 4,
  atk: "+2",
  weapon: { wpnName: "Branch", wpnRange: "Very Close", wpnDamage: "3d8+2 phy" },
  experiences: ["Forest Knowledge +3"],
  features: [
    {
      name: "Just a Tree",
      type: "Passive",
      text: "Before they make their first attack in a fight or after they become Hidden, the Treant is indistinguishable from other trees until they next act or a PC succeeds on an Instinct Roll to identify them.",
    },
    {
      name: "Seed Barrage",
      type: "Action",
      text: "Mark a Stress and make an attack against up to three targets within Close range, pummeling them with giant acorns. Targets the Treant succeeds against take 2d10+5 physical damage.",
    },
    {
      name: "Take Root",
      type: "Action",
      text: "Mark a Stress to Root the Treant in place. The Treant is Restrained while Rooted, and can end this effect instead of moving while they are spotlighted. While Rooted, the Treant has resistance to physical damage.",
    },
  ],
};

export const Construct = {
  name: "CONSTRUCT",
  tier: 1,
  type: "Solo",
  desc: "A roughly humanoid being of stone and steel, assembled and animated by magic.",
  motives: "Destroy environment, serve creator, smash target, trample groups",
  difficulty: 13,
  thresholds: [7, 15],
  hp: 9,
  stress: 4,
  atk: "+4",
  weapon: { wpnName: "Fist Slam", wpnRange: "Melee", wpnDamage: "1d20 phy" },
  experiences: [],
  features: [
    {
      name: "Relentless (2)",
      type: "Passive",
      text: "The Construct can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Weak Structure",
      type: "Passive",
      text: "When the Construct marks HP from physical damage, they must mark an additional HP.",
    },
    {
      name: "Trample",
      type: "Action",
      text: "Mark a Stress to make an attack against all targets in the Construct’s path when they move. Targets the Construct succeeds against take 1d8 physical damage.",
    },
    {
      name: "Overload",
      type: "Reaction",
      text: "Before rolling damage for the Construct’s attack, you can mark a Stress to gain a +10 bonus to the damage roll. The Construct can then take the spotlight again.",
    },
    {
      name: "Death Quake",
      type: "Reaction",
      text: "When the Construct marks their last HP, the magic powering them ruptures in an explosion of force. Make an attack with advantage against all targets within Very Close range. Targets the Construct succeeds against take 1d12+2 magic damage.",
    },
  ],
};

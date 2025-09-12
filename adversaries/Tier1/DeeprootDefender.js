export const DeeprootDefender = {
  name: "DEEPROOT DEFENDER",
  tier: 1,
  type: "Bruiser",
  desc: "A burly vegetable-person with grasping vines.",
  motives: "Ambush, grab, protect, pummel",
  difficulty: 10,
  thresholds: [8, 14],
  hp: 7,
  stress: 3,
  atk: "+2",
  weapon: { wpnName: "Vines", wpnRange: "Close", wpnDamage: "1d8+3 phy" },
  experiences: ["Huge +3"],
  features: [
    {
      name: "Ground Slam",
      type: "Action",
      text: "Slam the ground, knocking all targets within Very Close range back to Far range. Each target knocked back this way must mark a Stress.",
    },
    {
      name: "Grab and Drag",
      type: "Action",
      text: "Make an attack against a target within Close range. On a success, spend a Fear to pull them into Melee range, deal 1d6+2 physical damage, and Restrain them until the Defender takes Severe damage.",
    },
  ],
};

export const SkeletonKnight = {
  name: "SKELETON KNIGHT",
  tier: 1,
  type: "Bruiser",
  desc: "A large armored skeleton with a huge blade.",
  motives: "Cut down the living, steal skin, wreak havoc",
  difficulty: 13,
  thresholds: [7, 13],
  hp: 5,
  stress: 2,
  atk: "+2",
  weapon: {
    wpnName: "Rusty Greatsword",
    wpnRange: "Melee",
    wpnDamage: "1d10+2 phy",
  },
  experiences: [],
  features: [
    {
      name: "Terrifying",
      type: "Passive",
      text: "When the Knight makes a successful attack, all PCs within Close range lose a Hope and you gain a Fear.",
    },
    {
      name: "Cut to the Bone",
      type: "Action",
      text: "Mark a Stress to make an attack against all targets within Very Close range. Targets the Knight succeeds against take 1d8+2 physical damage and must mark a Stress.",
    },
    {
      name: "Dig Two Graves",
      type: "Reaction",
      text: "When the Knight is defeated, they make an attack against a target within Very Close range (prioritizing the creature who killed them). On a success, the target takes 1d4+8 physical damage and loses 1d4 Hope.",
    },
  ],
};

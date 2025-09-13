export const JaggedKnifeHexer = {
  name: "JAGGED KNIFE HEXER",
  tier: 1,
  type: "Support",
  desc: "A staff-wielding bandit in a cloak adorned with magical paraphernalia, using curses to vex their foes.",
  motives: "Command, hex, profit",
  difficulty: 13,
  thresholds: [5, 9],
  hp: 4,
  stress: 4,
  atk: "+2",
  weapon: { wpnName: "Staff", wpnRange: "Far", wpnDamage: "1d6+2 mag" },
  experiences: ["Magical Knowledge +2"],
  features: [
    {
      name: "Curse",
      type: "Action",
      text: "Choose a target within Far range and temporarily Curse them. While the target is Cursed, you can mark a Stress when that target rolls with Hope to make the roll be with Fear instead.",
    },
    {
      name: "Chaotic Flux",
      type: "Action",
      text: "Make an attack against up to three targets within Very Close range. Mark a Stress to deal 2d6+3 magic damage to targets the Hexer succeeded against.",
    },
  ],
};

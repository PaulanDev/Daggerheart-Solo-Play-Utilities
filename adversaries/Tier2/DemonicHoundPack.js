export const DemonicHoundPack = {
  name: "DEMONIC HOUND PACK",
  tier: 2,
  type: "Horde",
  desc: "(1/HP) Unnatural hounds lit from within by hellfire.",
  motives: "Cause fear, consume flesh, please masters",
  difficulty: 15,
  thresholds: [11, 23],
  hp: 6,
  stress: 3,
  atk: "+0",
  weapon: {
    wpnName: "Claws and Fangs",
    wpnRange: "Melee",
    wpnDamage: "2d8+2 phy",
  },
  experiences: ["Scent Tracking +3"],
  features: [
    {
      name: "Horde (2d4+1)",
      type: "Passive",
      text: "When the Pack has marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead.",
    },
    {
      name: "Dreadhowl",
      type: "Action",
      text: "Mark a Stress to make all targets within Very Close range lose a Hope. If a target is not able to lose a Hope, they must instead mark 2 Stress.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Pack makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

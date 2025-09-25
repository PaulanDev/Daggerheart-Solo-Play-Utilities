export const DemonOfDespair = {
  name: "DEMON OF DESPAIR",
  tier: 3,
  type: "Skulk",
  desc: "A cloaked demon-creature with long limbs, seeping shadows.",
  motives: "Make fear contagious, stick to the shadows, undermine resolve",
  difficulty: 17,
  thresholds: [18, 35],
  hp: 6,
  stress: 5,
  atk: "+3",
  weapon: { wpnName: "Miasma Bolt", wpnRange: "Far", wpnDamage: "3d6+1 mag" },
  experiences: ["Manipulation +3"],
  features: [
    {
      name: "Depths of Despair",
      type: "Passive",
      text: "The Demon deals double damage to PCs with 0 Hope.",
    },
    {
      name: "Your Struggle Is Pointless",
      type: "Action",
      text: "Spend a Fear to weigh down the spirits of all PCs within Far range. All targets aff ected replace their Hope Die with a d8 until they roll a success with Hope or their next rest.",
    },
    {
      name: "Your Friends Will Fail You",
      type: "Reaction",
      text: "When a PC fails with Fear, you can mark a Stress to cause all other PCs within Close range to lose a Hope.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Demon makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

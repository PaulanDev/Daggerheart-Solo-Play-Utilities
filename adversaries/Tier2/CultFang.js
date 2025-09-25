export const CultFang = {
  name: "CULT FANG",
  tier: 2,
  type: "Skulk",
  desc: "A professional killer-turned-cultist.",
  motives: "Capture sacrifices, isolate prey, rise in the ranks",
  difficulty: 15,
  thresholds: [9, 17],
  hp: 4,
  stress: 4,
  atk: "+2",
  weapon: { wpnName: "Long Knife", wpnRange: "Melee", wpnDamage: "2d8+4 phy" },
  experiences: [],
  features: [
    {
      name: "Shadow’s Embrace",
      type: "Passive",
      text: "The Fang can climb and walk on vertical surfaces. Mark a Stress to move from one shadow to another within Far range.",
    },
    {
      name: "Pick Off the Straggler",
      type: "Action",
      text: "Mark a Stress to cause a target within Melee range to make an Instinct Reaction Roll. On a failure, the target must mark 2 Stress and is teleported with the Fang to a shadow within Far range, making them temporarily Vulnerable. On a success, the target must mark a Stress.",
    },
  ],
};

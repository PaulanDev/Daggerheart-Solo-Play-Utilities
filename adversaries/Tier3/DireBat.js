export const DireBat = {
  name: "DIRE BAT",
  tier: 3,
  type: "Skulk",
  desc: "A wide-winged pet endlessly loyal to their vampire owner.",
  motives: "Dive-bomb, hide, protect leader",
  difficulty: 14,
  thresholds: [16, 30],
  hp: 5,
  stress: 3,
  atk: "+2",
  weapon: {
    wpnName: "Claws and Teeth",
    wpnRange: "Melee",
    wpnDamage: "2d6+7 phy",
  },
  experiences: ["Bloodthirsty +3"],
  features: [
    {
      name: "Flying",
      type: "Passive",
      text: "While flying, the Bat gains a +3 bonus to their Diffi culty.",
    },
    {
      name: "Screech",
      type: "Action",
      text: "Mark a Stress to send a high-pitch screech out toward all targets in front of the Bat within Far range. Those targets must mark 1d4 Stress.",
    },
    {
      name: "Guardian",
      type: "Reaction",
      text: "When an allied Vampire marks HP, you can mark a Stress to fly into Melee range of the attacker and make an attack with advantage against them. On a success, deal 2d6+2 physical damage.",
    },
  ],
};

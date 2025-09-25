export const DemonOfAvarice = {
  name: "DEMON OF AVARICE",
  tier: 3,
  type: "Support",
  desc: "A regal cloaked monstrosity with circular horns adorned with treasure.",
  motives: "Consume, fuel greed, sow dissent",
  difficulty: 17,
  thresholds: [15, 29],
  hp: 6,
  stress: 5,
  atk: "+2",
  weapon: { wpnName: "Hungry Maw", wpnRange: "Melee", wpnDamage: "3d6+5 mag" },
  experiences: ["Manipulation +3"],
  features: [
    {
      name: "Money Talks",
      type: "Passive",
      text: "Attacks against the Demon are made with disadvantage unless the attacker spends a handful of gold. This Demon starts with a number of handfuls equal to the number of PCs. When a target marks HP from the Demon’s standard attack, they can spend a handful of gold instead of marking HP (1 handful per HP). Add a handful of gold to the Demon for each handful of gold spent by PCs on this feature.",
    },
    {
      name: "Numbers Must Go Up",
      type: "Passive",
      text: "Add a bonus to the Demon’s attack rolls equal to the number of handfuls of gold they have.",
    },
    {
      name: "Money Is Time",
      type: "Action",
      text: "Spend 3 handfuls of gold (or a Fear) to spotlight 1d4+1 allies.",
    },
  ],
};

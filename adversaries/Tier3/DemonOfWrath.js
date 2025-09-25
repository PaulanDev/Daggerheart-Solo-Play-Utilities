export const DemonOfWrath = {
  name: "DEMON OF WRATH",
  tier: 3,
  type: "Bruiser",
  desc: "A hulking demon with boulder-sized fists, driven by endless rage.",
  motives: "Fuel anger, impress rivals, wreak havoc",
  difficulty: 17,
  thresholds: [22, 40],
  hp: 7,
  stress: 5,
  atk: "+3",
  weapon: { wpnName: "Fists", wpnRange: "Very Close", wpnDamage: "3d8+1 mag" },
  experiences: ["Intimidation +2"],
  features: [
    {
      name: "Anger Unrelenting",
      type: "Passive",
      text: "The Demon’s attacks deal direct damage.",
    },
    {
      name: "Battle Lust",
      type: "Action",
      text: "Spend a Fear to boil the blood of all PCs within Far range. They use a d20 as their Fear Die until the end of the scene.",
    },
    {
      name: "Retaliation",
      type: "Reaction",
      text: "When the Demon takes damage from an attack within Close range, you can mark a Stress to make a standard attack against the attacker.",
    },
    {
      name: "Blood and Souls",
      type: "Reaction",
      text: "Countdown (Loop 6). Activate the first time an attack is made within sight of the Demon. It ticks down when a PC takes a violent action. When it triggers, summon 1d4 Minor Demons, who appear at Close range.",
    },
  ],
};

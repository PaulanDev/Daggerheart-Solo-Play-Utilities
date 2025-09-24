export const MasterAssassin = {
  name: "MASTER ASSASSIN",
  tier: 2,
  type: "Leader",
  desc: "A seasoned killer with a threatening voice and a deadly blade.",
  motives: "Ambush, get out alive, kill, prepare for all scenarios",
  difficulty: 15,
  thresholds: [12, 25],
  hp: 7,
  stress: 5,
  atk: "+5",
  weapon: {
    wpnName: "Serrated Dagger",
    wpnRange: "Close",
    wpnDamage: "2d10+2 phy",
  },
  experiences: ["Command +3", "Intrusion +3"],
  features: [
    {
      name: "Won’t See It Coming",
      type: "Passive",
      text: "The Assassin deals direct damage while they’re Hidden.",
    },
    {
      name: "Strike as One",
      type: "Action",
      text: "Mark a Stress to spotlight a number of other Assassins equal to the Assassin’s unmarked Stress.",
    },
    {
      name: "The Subtle Blade",
      type: "Reaction",
      text: "When the Assassin successfully makes a standard attack against a Vulnerable target, you can spend a Fear to deal Severe damage instead of their standard damage.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Assassin makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

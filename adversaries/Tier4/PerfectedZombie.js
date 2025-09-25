export const PerfectedZombie = {
  name: "PERFECTED ZOMBIE",
  tier: 4,
  type: "Bruiser",
  desc: "A towering, muscular zombie with magically infused strength and skill.",
  motives: "Consume, hound, maim, terrify",
  difficulty: 20,
  thresholds: [40, 70],
  hp: 9,
  stress: 4,
  atk: "+4",
  weapon: {
    wpnName: "Greataxe",
    wpnRange: "Very Close",
    wpnDamage: "4d12+15 phy",
  },
  experiences: [],
  features: [
    {
      name: "Terrifying",
      type: "Passive",
      text: "When the Zombie makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear.",
    },
    {
      name: "Fearsome Presence",
      type: "Passive",
      text: "PCs can’t spend Hope to use features against the Zombie.",
    },
    {
      name: "Perfect Strike",
      type: "Action",
      text: "Mark a Stress to make a standard attack against all targets within Very Close range. Targets the Zombie succeeds against are Vulnerable until their next rest.",
    },
    {
      name: "Skilled Opportunist",
      type: "Reaction",
      text: "When another adversary deals damage to a target within Very Close range of the Zombie, you can spend a Fear to add the Zombie’s standard attack damage to the damage roll.",
    },
  ],
};

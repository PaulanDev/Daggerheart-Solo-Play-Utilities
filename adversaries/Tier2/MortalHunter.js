export const MortalHunter = {
  name: "MORTAL HUNTER",
  tier: 2,
  type: "Leader",
  desc: "An undead figure wearing a heavy leather coat, with searching eyes and a casually cruel demeanor.",
  motives: "Devour, hunt, track",
  difficulty: 16,
  thresholds: [15, 27],
  hp: 6,
  stress: 4,
  atk: "+5",
  weapon: {
    wpnName: "Tear at Flesh",
    wpnRange: "Very Close",
    wpnDamage: "2d12+1 phy",
  },
  experiences: ["Bloodhound +3"],
  features: [
    {
      name: "Terrifying",
      type: "Passive",
      text: "When the Hunter makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear.",
    },
    {
      name: "Deathlock",
      type: "Action",
      text: "Spend a Fear to curse a target within Very Close range with a necrotic Deathlock until the end of the scene. Attacks made by the Hunter against a Deathlocked target deal direct damage. The Hunter can only maintain one Deathlock at a time.",
    },
    {
      name: "Inevitable Death",
      type: "Action",
      text: "Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage.",
    },
    {
      name: "Rampage",
      type: "Reaction",
      text: "Countdown (Loop 1d6). When the Hunter is in the spotlight for the fi rst time, activate the countdown. When it triggers, move the Hunter in a straight line to a point within Far range and make an attack against all targets in their path. Targets the Hunter succeeds against take 2d8+2 physical damage.",
    },
  ],
};

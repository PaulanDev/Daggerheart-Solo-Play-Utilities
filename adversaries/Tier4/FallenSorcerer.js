export const FallenSorcerer = {
  name: "FALLEN SORCERER",
  tier: 4,
  type: "Support",
  desc: "A powerful mage bound by the bargains they made in life.",
  motives: "Acquire, dishearten, dominate, torment",
  difficulty: 19,
  thresholds: [26, 42],
  hp: 6,
  stress: 5,
  atk: "+4",
  weapon: {
    wpnName: "Corrupted Staff",
    wpnRange: "Far",
    wpnDamage: "4d6+10 mag Experience",
  },
  experiences: ["Ancient Knowledge +2"],
  features: [
    {
      name: "Conflagration",
      type: "Action",
      text: "Spend a Fear to unleash an all-consuming fi restorm and make an attack against all targets within Close range. Targets the Sorcerer succeeds against take 2d10+6 direct magic damage.",
    },
    {
      name: "Nightmare Tableau",
      type: "Action",
      text: "Mark a Stress to trap a target within Far range in a powerful illusion of their worst fears. While trapped, the target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Instinct Roll.",
    },
    {
      name: "Slippery",
      type: "Reaction",
      text: "When the Sorcerer takes damage from an attack, they can teleport up to Far range.",
    },
    {
      name: "Shackles of Guilt",
      type: "Reaction",
      text: "Countdown (Loop 2d6). When the Sorcerer is in the spotlight for the fi rst time, activate the countdown. When it triggers, all targets within Far range become Vulnerable and must mark a Stress as they relive their greatest regrets. A target can break free from their regret with a successful Presence or Strength Roll. When a PC fails to break free, they lose a Hope.",
    },
  ],
};

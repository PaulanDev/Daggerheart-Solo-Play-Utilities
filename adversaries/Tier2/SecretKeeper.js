export const SecretKeeper = {
  name: "SECRET-KEEPER",
  tier: 2,
  type: "Leader",
  desc: "A clandestine leader with a direct channel to the Fallen Gods.",
  motives: "Amass great power, plot, take command",
  difficulty: 16,
  thresholds: [13, 26],
  hp: 7,
  stress: 4,
  atk: "+3",
  weapon: {
    wpnName: "Sigil-laden Staff",
    wpnRange: "Far",
    wpnDamage: "2d12 mag",
  },
  experiences: ["Coercion +2", "Fallen Lore +2"],
  features: [
    {
      name: "Seize Your Moment",
      type: "Action",
      text: "Spend 2 Fear to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage.",
    },
    {
      name: "Our Master’s Will",
      type: "Reaction",
      text: "When you spotlight an ally within Far range, mark a Stress to gain a Fear.",
    },
    {
      name: "Summoning Ritual",
      type: "Reaction",
      text: "Countdown (6). When the Secret-Keeper is in the spotlight for the first time, activate the countdown. When they mark HP, tick up this countdown by the number of HP marked. When it triggers, summon a Minor Demon who appears at Close range.",
    },
    {
      name: "Fallen Hounds",
      type: "Reaction",
      text: "Once per scene, when the SecretKeeper marks 2 or more HP, you can mark a Stress to summon a Demonic Hound Pack, which appears at Close range and is immediately spotlighted.",
    },
  ],
};

export const Gorgon = {
  name: "GORGON",
  tier: 2,
  type: "Solo",
  desc: "A snake-headed, scaled humanoid with a gilded bow, enraged that their peace has been disturbed.",
  motives: "Corner, hit-and-run, petrify, seek vengeance",
  difficulty: 15,
  thresholds: [13, 25],
  hp: 9,
  stress: 3,
  atk: "+4",
  weapon: {
    wpnName: "Sunsear Shortbow",
    wpnRange: "Far",
    wpnDamage: "2d20+3 mag",
  },
  experiences: ["Stealth +3"],
  features: [
    {
      name: "Relentless (2)",
      type: "Passive",
      text: "The Gorgon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Sunsear Arrows",
      type: "Passive",
      text: "When the Gorgon makes a successful standard attack, the target Glows until the end of the scene and can’t become Hidden. Attack rolls made against a Glowing target have advantage.",
    },
    {
      name: "Crown of Serpents",
      type: "Action",
      text: "Make an attack roll against a target within Melee range using the Gorgon’s protective snakes. On a success, mark a Stress to deal 2d10+4 physical damage and the target must mark a Stress.",
    },
    {
      name: "Petrifying Gaze",
      type: "Reaction",
      text: "When the Gorgon takes damage from an attack within Close range, you can spend a Fear to force the attacker to make an Instinct Reaction Roll. On a failure, they begin to turn to stone, marking a HP and starting a Petrification Countdown (4). This countdown ticks down when the Gorgon is attacked. When it triggers, the target must make a death move. If the Gorgon is defeated, all petrification countdowns end.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Gorgon makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

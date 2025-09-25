export const Vampire = {
  name: "VAMPIRE",
  tier: 3,
  type: "Standard",
  desc: "An intelligent undead with blood-stained lips and a predator’s smile.",
  motives: "Bite, charm, deceive, feed, intimidate",
  difficulty: 16,
  thresholds: [18, 35],
  hp: 5,
  stress: 4,
  atk: "+3",
  weapon: { wpnName: "Rapier", wpnRange: "Melee", wpnDamage: "3d8 phy" },
  experiences: ["Nocturnal Hunter +3"],
  features: [
    {
      name: "Draining Bite",
      type: "Action",
      text: "Make an attack against a target within Melee range. On a success, deal 5d4 physical damage. A target who marks HP from this attack loses a Hope and must mark a Stress. The Vampire then clears a HP.",
    },
    {
      name: "Mistform",
      type: "Reaction",
      text: "When the Vampire takes physical damage, you can spend a Fear to take half damage.",
    },
  ],
};

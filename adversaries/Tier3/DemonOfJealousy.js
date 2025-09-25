export const DemonOfJealousy = {
  name: "DEMON OF JEALOUSY",
  tier: 3,
  type: "Ranged",
  desc: "A fickle creature of spindly limbs and insatiable desires.",
  motives:
    "Join in on others’ success, take what belongs to others, hold grudges",
  difficulty: 17,
  thresholds: [17, 30],
  hp: 6,
  stress: 6,
  atk: "+4",
  weapon: {
    wpnName: "Psychic Assault",
    wpnRange: "Far",
    wpnDamage: "3d8+3 mag",
  },
  experiences: ["Manipulation +3"],
  features: [
    {
      name: "Unprotected Mind",
      type: "Passive",
      text: "The Demon’s standard attack deals direct damage.",
    },
    {
      name: "My Turn",
      type: "Reaction",
      text: "When the Demon marks HP from an attack, spend a number of Fear equal to the HP marked by the Demon to cause the attacker to mark the same number of HP.",
    },
    {
      name: "Rivalry",
      type: "Reaction",
      text: "When a creature within Close range takes damage from a different adversary, you can mark a Stress to add a d4 to the damage roll.",
    },
    {
      name: "What’s Yours Is Mine",
      type: "Reaction",
      text: "When a PC takes Severe damage within Very Close range of the Demon, you can spend a Fear to cause the target to make a Finesse Reaction Roll. On a failure, the Demon seizes one item or consumable of their choice from the target’s inventory.",
    },
  ],
};

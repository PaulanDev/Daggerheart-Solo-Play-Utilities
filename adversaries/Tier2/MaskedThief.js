export const MaskedThief = {
  name: "MASKED THIEF",
  tier: 2,
  type: "Skulk",
  desc: "A cunning thief with acrobatic skill and a flair for the dramatic.",
  motives: "Evade, hide, pilfer, profit",
  difficulty: 14,
  thresholds: [8, 17],
  hp: 4,
  stress: 5,
  atk: "+3",
  weapon: { wpnName: "Backsword", wpnRange: "Melee", wpnDamage: "2d8+3 phy" },
  experiences: ["Acrobatics +3"],
  features: [
    {
      name: "Quick Hands",
      type: "Action",
      text: "Make an attack against a target within Melee range. On a success, deal 1d8+2 physical damage and the Thief steals one item or consumable from the target’s inventory.",
    },
    {
      name: "Escape Plan",
      type: "Action",
      text: "Mark a Stress to reveal a snare trap set anywhere on the battlefield by the Thief. All targets within Very Close range of the trap must succeed on an Agility Reaction Roll (13) or be pulled off their feet and suspended upside down. A target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Finesse or Strength Roll (13).",
    },
  ],
};

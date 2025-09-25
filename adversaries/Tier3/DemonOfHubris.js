export const DemonOfHubris = {
  name: "DEMON OF HUBRIS",
  tier: 3,
  type: "Leader",
  desc: "A perfectly beautiful and infinitely cruel demon with a gleaming spear and elegant robes.",
  motives: "Condescend, declare premature victory, prove superiority",
  difficulty: 18,
  thresholds: [18, 36],
  hp: 7,
  stress: 5,
  atk: "+4",
  weapon: {
    wpnName: "Perfect Spear",
    wpnRange: "Very Close",
    wpnDamage: "3d10 phy",
  },
  experiences: ["Manipulation +2"],
  features: [
    {
      name: "Terrifying",
      type: "Passive",
      text: "When the Demon makes a successful attack, all PCs within Far range must lose a Hope and you gain a Fear.",
    },
    {
      name: "Double or Nothing",
      type: "Passive",
      text: "When a PC within Far range fails a roll, they can choose to reroll their Fear Die and take the new result. If they still fail, they mark 2 Stress and the Demon clears a Stress.",
    },
    {
      name: "Unparalleled Skill",
      type: "Action",
      text: "Mark a Stress to deal the Demon’s standard attack damage to a target within Close range.",
    },
    {
      name: "The Root of Villainy",
      type: "Action",
      text: "Spend a Fear to spotlight two other Demons within Far range.",
    },
    {
      name: "You Pale in Comparison",
      type: "Reaction",
      text: "When a PC fails a roll within Close range of the Demon, they must mark a Stress.",
    },
  ],
};

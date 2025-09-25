export const MerchantBaron = {
  name: "MERCHANT BARON",
  tier: 2,
  type: "Social",
  desc: "An accomplished merchant with a large operation under their command.",
  motives: "Abuse power, gather resources, mobilize minions",
  difficulty: 15,
  thresholds: [9, 19],
  hp: 5,
  stress: 3,
  atk: "−2",
  weapon: { wpnName: "Rapier", wpnRange: "Melee", wpnDamage: "1d6+2 phy" },
  experiences: ["Nobility +2", "Trade +2"],
  features: [
    {
      name: "Everyone Has a Price",
      type: "Action",
      text: "Spend a Fear to offer a target a dangerous bargain for something they want or need. If used on a PC, they must make a Presence Reaction Roll (17). On a failure, they must mark 2 Stress or take the deal.",
    },
    {
      name: "The Best Muscle Money Can Buy",
      type: "Action",
      text: "Once per scene, mark a Stress to summon 1d4+1 Tier 1 adversaries, who appear at Far range, to enforce the Baron’s will.",
    },
  ],
};

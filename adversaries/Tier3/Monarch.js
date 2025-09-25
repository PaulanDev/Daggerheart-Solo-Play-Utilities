export const Monarch = {
  name: "MONARCH",
  tier: 3,
  type: "Social",
  desc: "The sovereign ruler of a nation, wreathed in the privilege of tradition and wielding unmatched power in their domain.",
  motives: "Control vassals, destroy rivals, forge a legacy",
  difficulty: 16,
  thresholds: [16, 32],
  hp: 6,
  stress: 5,
  atk: "+0",
  weapon: { wpnName: "Warhammer", wpnRange: "Melee", wpnDamage: "3d6+3 phy" },
  experiences: ["History +3", "Nobility +3"],
  features: [
    {
      name: "Execute Them!",
      type: "Action",
      text: "Spend a Fear per PC in the party to have the group condemned for crimes real or imagined. A PC who succeeds on a Presence Roll can demand trial by combat or another special form of trial.",
    },
    {
      name: "Crownsguard",
      type: "Action",
      text: "Once per scene, mark a Stress to summon six Tier 3 Minions, who appear at Close range to enforce the Monarch’s will.",
    },
    {
      name: "Casus Belli",
      type: "Reaction",
      text: "Long-Term Countdown (8). Spend a Fear to activate after the Monarch’s desire for war is first revealed. When it triggers, the Monarch has a reason to rally the nation to war and the support to act on that reason. You gain 1d4 Fear.",
    },
  ],
};

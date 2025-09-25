export const RoyalAdvisor = {
  name: "ROYAL ADVISOR",
  tier: 2,
  type: "Social",
  desc: "A high-ranking courtier with the ear of the local nobility.",
  motives: "Curry favor, manufacture evidence, scheme",
  difficulty: 14,
  thresholds: [8, 15],
  hp: 3,
  stress: 3,
  atk: "−3",
  weapon: { wpnName: "Wand", wpnRange: "Far", wpnDamage: "1d4+3 phy" },
  experiences: ["Administration +3", "Courtier +3"],
  features: [
    {
      name: "Devastating Retort",
      type: "Passive",
      text: "A PC who rolls less than 17 on an action roll targeting the Advisor must mark a Stress.",
    },
    {
      name: "Bend Ears",
      type: "Action",
      text: "Mark a Stress to influence an NPC within Melee range with whispered words. That target’s opinion on one matter shifts toward the Advisor’s preference unless it is in direct opposition to the target’s motives.",
    },
    {
      name: "Scapegoat",
      type: "Action",
      text: "Spend a Fear to convince a crowd or notable individual that one person or group is responsible for some problem facing the target. The target becomes hostile to the scapegoat until convinced of their innocence with a successful Presence Roll (17).",
    },
  ],
};

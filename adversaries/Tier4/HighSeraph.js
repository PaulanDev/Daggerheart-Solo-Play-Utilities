export const HighSeraph = {
  name: "HIGH SERAPH",
  tier: 4,
  type: "Leader",
  desc: "A divine champion, head of a hallowed host of warriors who enforce their god’s will.",
  motives: "Enforce dogma, fly, pronounce judgment, smite",
  difficulty: 20,
  thresholds: [37, 70],
  hp: 7,
  stress: 5,
  atk: "+8",
  weapon: {
    wpnName: "Holy Sword",
    wpnRange: "Very Close",
    wpnDamage: "4d10+10 phy",
  },
  experiences: ["Divine Knowledge +3"],
  features: [
    {
      name: "Relentless (2)",
      type: "Passive",
      text: "The Seraph can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Divine Flight",
      type: "Passive",
      text: "While the Seraph is flying, spend a Fear to move up to Far range instead of Close range before taking an action.",
    },
    {
      name: "Judgment",
      type: "Action",
      text: "Spend a Fear to make a target Guilty in the eyes of the Seraph’s god until the Seraph is defeated. While Guilty, the target doesn’t gain Hope on a result with Hope. When the Seraph succeeds on a standard attack against a Guilty target, they deal Severe damage instead of their standard damage. The Seraph can only mark one target at a time.",
    },
    {
      name: "God Rays",
      type: "Action",
      text: "Mark a Stress to reflect a sliver of divinity as a searing beam of light that hits up to twenty targets within Very Far range. Targets must make a Presence Reaction Roll, with disadvantage if they are marked Guilty. Targets who fail take 4d6+12 magic damage. Targets who succeed take half damage.",
    },
    {
      name: "We Are One",
      type: "Action",
      text: "Once per scene, spend a Fear to spotlight all other adversaries within Far range. Attacks they make while spotlighted in this way deal half damage.",
    },
  ],
};

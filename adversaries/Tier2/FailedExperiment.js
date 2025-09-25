export const FailedExperiment = {
  name: "FAILED EXPERIMENT",
  tier: 2,
  type: "Standard",
  desc: "A magical necromantic experiment gone wrong, leaving them warped and ungainly.",
  motives: "Devour, hunt, track",
  difficulty: 13,
  thresholds: [12, 23],
  hp: 3,
  stress: 3,
  atk: "+1",
  weapon: {
    wpnName: "Bite and Claw",
    wpnRange: "Melee",
    wpnDamage: "2d6+5 phy",
  },
  experiences: ["Copycat +3"],
  features: [
    {
      name: "Warped Fortitude",
      type: "Passive",
      text: "The Experiment is resistant to physical damage.",
    },
    {
      name: "Overwhelm",
      type: "Passive",
      text: "When a target the Experiment attacks has other adversaries within Very Close range, the Experiment deals double damage.",
    },
    {
      name: "Lurching Lunge",
      type: "Action",
      text: "Mark a Stress to spotlight the Experiment as an additional GM move instead of spending Fear.",
    },
  ],
};

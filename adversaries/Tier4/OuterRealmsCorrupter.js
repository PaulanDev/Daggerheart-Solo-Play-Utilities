export const OuterRealmsCorrupter = {
  name: "OUTER REALMS CORRUPTER",
  tier: 4,
  type: "Support",
  desc: "A shifting, formless mass seemingly made of chromatic light.",
  motives: "Confuse, distract, overwhelm",
  difficulty: 19,
  thresholds: [27, 47],
  hp: 4,
  stress: 3,
  atk: "+7",
  weapon: {
    wpnName: "Corroding Pseudopod",
    wpnRange: "Very Close",
    wpnDamage: "4d8+5 mag",
  },
  experiences: [],
  features: [
    {
      name: "Will-Shattering Touch",
      type: "Passive",
      text: "When a PC takes damage from the Corrupter, they lose a Hope.",
    },
    {
      name: "Disgorge Reality Flotsam",
      type: "Action",
      text: "Mark a Stress to spew partially digested portions of consumed realities at all targets within Close range. Targets must succeed on a Knowledge Reaction Roll or mark 2 Stress. ",
    },
  ],
};

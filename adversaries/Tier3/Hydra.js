export const Hydra = {
  name: "HYDRA",
  tier: 3,
  type: "Solo",
  desc: "A quadrupedal scaled beast with multiple long-necked heads, each filled with menacing fangs.",
  motives: "Devour, regenerate, terrify",
  difficulty: 18,
  thresholds: [19, 35],
  hp: 10,
  stress: 5,
  atk: "+3",
  weapon: { wpnName: "Bite", wpnRange: "Close", wpnDamage: "2d12+2 phy" },
  experiences: [],
  features: [
    {
      name: "Many-Headed Menace",
      type: "Passive",
      text: "The Hydra begins with three heads and can have up to five. When the Hydra takes Major or greater damage, they lose a head.",
    },
    {
      name: "Relentless (X)",
      type: "Passive",
      text: "The Hydra can be spotlighted X times per GM turn, where X is the Hydra’s number of heads. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Regeneration",
      type: "Action",
      text: "If the Hydra has any marked HP, spend a Fear to clear a HP and grow two heads.",
    },
    {
      name: "Terrifying Chorus",
      type: "Action",
      text: "All PCs within Far range lose 2 Hope.",
    },
    {
      name: "Magical Weakness",
      type: "Reaction",
      text: "When the Hydra takes magic damage, they become Dazed until the next roll with Fear. While Dazed, they can’t use their Regeneration action but are immune to magic damage.",
    },
  ],
};

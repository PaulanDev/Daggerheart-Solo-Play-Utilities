export const Harrier = {
  name: "HARRIER",
  tier: 1,
  type: "Standard",
  desc: "A nimble fighter armed with javelins.",
  motives: "Flank, harry, kite, profi t",
  difficulty: 12,
  thresholds: [5, 9],
  hp: 3,
  stress: 3,
  atk: "+1",
  weapon: { wpnName: "Javelin", wpnRange: "Close", wpnDamage: "1d6+2 phy" },
  experiences: ["Camouflage +2"],
  features: [
    {
      name: "Maintain Distance",
      type: "Passive",
      text: "After making a standard attack, the Harrier can move anywhere within Far range.",
    },
    {
      name: "Fall Back",
      type: "Reaction",
      text: "When a creature moves into Melee range to make an attack, you can mark a Stress before the attack roll to move anywhere within Close range and make an attack against that creature. On a success, deal 1d10+2 physical damage.",
    },
  ],
};

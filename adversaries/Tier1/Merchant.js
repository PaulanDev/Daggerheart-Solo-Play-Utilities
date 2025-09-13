export const Merchant = {
  name: "MERCHANT",
  tier: 1,
  type: "Social",
  desc: "A finely dressed trader with a keen eye for financial gain.",
  motives: "Buy low and sell high, create demand, inflate prices, seek profit",
  difficulty: 12,
  thresholds: [4, 8],
  hp: 3,
  stress: 3,
  atk: "−4",
  weapon: { wpnName: "Club", wpnRange: "Melee", wpnDamage: "1d4+1 phy" },
  experiences: ["Shrewd Negotiator +3"],
  features: [
    {
      name: "Preferential Treatment",
      type: "Passive",
      text: "A PC who succeeds on a Presence Roll against the Merchant gains a discount on purchases. A PC who fails on a Presence Roll against the Merchant must pay more and has disadvantage on future Presence Rolls against the Merchant.",
    },
    {
      name: "The Runaround",
      type: "Passive",
      text: "When a PC rolls a 14 or lower on a Presence Roll made against the Merchant, they must mark a Stress.",
    },
  ],
};

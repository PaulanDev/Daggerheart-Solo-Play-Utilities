export const Courtier = {
  name: "COURTIER",
  tier: 1,
  type: "Social",
  desc: "An ambitious and ostentatiously dressed socialite.",
  motives: "Discredit, gain favor, maneuver, scheme",
  difficulty: 12,
  thresholds: [4, 8],
  hp: 3,
  stress: 4,
  atk: "−4",
  weapon: { wpnName: "Daggers", wpnRange: "Melee", wpnDamage: "1d4+2 phy" },
  experiences: ["Socialite +3"],
  features: [
    {
      name: "Mockery",
      type: "Action",
      text: "Mark a Stress to say something mocking and force a target within Close range to make a Presence Reaction Roll (14) to see if they can save face. On a failure, the target must mark 2 Stress and is Vulnerable until the scene ends.",
    },
    {
      name: "Scapegoat",
      type: "Action",
      text: "Spend a Fear and target a PC. The Courtier convinces a crowd or prominent individual that the target is the cause of their current confl ict or misfortune.",
    },
  ],
};

export const Courtesan = {
  name: "COURTESAN",
  tier: 2,
  type: "Social",
  desc: "An accomplished manipulator and master of the social arts.",
  motives: "Entice, maneuver, secure patrons",
  difficulty: 13,
  thresholds: [7, 13],
  hp: 3,
  stress: 4,
  atk: "−3",
  weapon: { wpnName: "Dagger", wpnRange: "Melee", wpnDamage: "1d4+3 phy" },
  experiences: ["Manipulation +3", "Socialite +3"],
  features: [
    {
      name: "Searing Glance",
      type: "Reaction",
      text: "When a PC within Close range makes a Presence Roll, you can mark a Stress to cast a gaze toward the aftermath. On the target’s failure, they must mark 2 Stress and are Vulnerable until the scene ends or they succeed on a social action against the Courtesan. On the target’s success, they must mark a Stress",
    },
  ],
};

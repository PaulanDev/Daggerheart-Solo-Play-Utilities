export const ApprenticeAssassin = {
  name: "APPRENTICE ASSASSIN",
  tier: 2,
  type: "Minion",
  desc: "A young trainee eager to prove themselves.",
  motives: "Act reckless, kill, prove their worth, show off",
  difficulty: 13,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "−1",
  weapon: {
    wpnName: "Thrown Dagger",
    wpnRange: "Very Close",
    wpnDamage: "4 phy",
  },
  experiences: ["Intrusion +2"],
  features: [
    {
      name: "Minion (6)",
      type: "Passive",
      text: "The Assassin is defeated when they take any damage. For every 6 damage a PC deals to the Assassin, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Apprentice Assassins within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage.",
    },
  ],
};

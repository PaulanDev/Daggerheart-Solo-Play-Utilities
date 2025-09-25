export const GiantRecruit = {
  name: "GIANT RECRUIT",
  tier: 2,
  type: "Minion",
  desc: "A giant fighter wearing borrowed armor.",
  motives: "Batter, make a living, overwhelm, terrify",
  difficulty: 13,
  thresholds: [null],
  hp: 1,
  stress: 2,
  atk: "+1",
  weapon: { wpnName: "Warhammer", wpnRange: "Very Close", wpnDamage: "5 phy" },
  experiences: [],
  features: [
    {
      name: "Minion (7)",
      type: "Passive",
      text: "The Recruit is defeated when they take any damage. For every 7 damage a PC deals to the Recruit, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Giant Recruits within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage.",
    },
  ],
};

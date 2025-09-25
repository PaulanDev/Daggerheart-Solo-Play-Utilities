export const CultInitiate = {
  name: "CULT INITIATE",
  tier: 2,
  type: "Minion",
  desc: "A low-ranking cultist in simple robes, eager to gain power.",
  motives: "Follow orders, gain power, seek forbidden knowledge",
  difficulty: 13,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "+0",
  weapon: { wpnName: "Ritual Dagger", wpnRange: "Melee", wpnDamage: "5 phy" },
  experiences: [],
  features: [
    {
      name: "Minion (6)",
      type: "Passive",
      text: "The Initiate is defeated when they take any damage. For every 6 damage a PC deals to the Initiate, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Cult Initiates within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage.",
    },
  ],
};

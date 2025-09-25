export const OuterRealmsThrall = {
  name: "OUTER REALMS THRALL",
  tier: 4,
  type: "Minion",
  desc: "A vaguely humanoid form stripped of memory and identity.",
  motives: "Destroy, disgust, disorient, intimidate",
  difficulty: 17,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "+3",
  weapon: {
    wpnName: "Claws and Teeth",
    wpnRange: "Very Close",
    wpnDamage: "11 phy",
  },
  experiences: [],
  features: [
    {
      name: "Minion (13)",
      type: "Passive",
      text: "The Thrall is defeated when they take any damage. For every 13 damage a PC deals to the Thrall, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Outer Realm Thralls within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 11 physical damage each. Combine this damage.",
    },
  ],
};

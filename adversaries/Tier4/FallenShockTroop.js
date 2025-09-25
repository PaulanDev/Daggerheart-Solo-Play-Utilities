export const FallenShockTroop = {
  name: "FALLEN SHOCK TROOP",
  tier: 4,
  type: "Minion",
  desc: "A cursed soul bound to the Fallen’s will.",
  motives: "Crush, dominate, earn relief, punish",
  difficulty: 18,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "+2",
  weapon: {
    wpnName: "Cursed Axe",
    wpnRange: "Very Close",
    wpnDamage: "12 phy",
  },
  experiences: [],
  features: [
    {
      name: "Minion (12)",
      type: "Passive",
      text: "The Shock Troop is defeated when they take any damage. For every 12 damage a PC deals to the Shock Troop, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Aura of Doom",
      type: "Passive",
      text: "When a PC marks HP from an attack by the Shock Troop, they lose a Hope.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Fallen Shock Troops within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 12 physical damage each. Combine this damage.",
    },
  ],
};

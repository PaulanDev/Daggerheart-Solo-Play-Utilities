export const HallowedSoldier = {
  name: "HALLOWED SOLDIER",
  tier: 4,
  type: "Minion",
  desc: "Souls of the faithful, lifted up with divine weaponry.",
  motives: "Obey, outmaneuver, punish, swarm",
  difficulty: 18,
  thresholds: [null],
  hp: 1,
  stress: 2,
  atk: "+2",
  weapon: {
    wpnName: "Sword and Shield",
    wpnRange: "Melee",
    wpnDamage: "10 phy",
  },
  experiences: [],
  features: [
    {
      name: "Minion (13)",
      type: "Passive",
      text: "The Soldier is defeated when they take any damage. For every 13 damage a PC deals to the Soldier, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Divine Flight",
      type: "Passive",
      text: "While the Soldier is flying, spend a Fear to move up to Far range instead of Close range before taking an action.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Hallowed Soldiers within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 10 physical damage each. Combine this damage.",
    },
  ],
};

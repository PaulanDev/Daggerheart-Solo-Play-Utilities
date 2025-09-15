export const RottedZombie = {
  name: "ROTTED ZOMBIE",
  tier: 1,
  type: "Minion",
  desc: "A decaying corpse ambling toward their prey.",
  motives: "Eat flesh, hunger, maul, surround",
  difficulty: 8,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "−3",
  weapon: { wpnName: "Bite", wpnRange: "Melee", wpnDamage: "2 phy" },
  experiences: [],
  features: [
    {
      name: "Minion (3)",
      type: "Passive",
      text: "The Zombie is defeated when they take any damage. For every 3 damage a PC deals to the Zombie, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Rotted Zombies within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage.",
    },
  ],
};

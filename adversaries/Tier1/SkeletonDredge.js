export const SkeletonDredge = {
  name: "SKELETON DREDGE",
  tier: 1,
  type: "Minion",
  desc: "A clattering pile of bones.",
  motives: "Fall apart, overwhelm, play dead, steal skin",
  difficulty: 8,
  thresholds: [null],
  hp: 1,
  stress: 1,
  atk: "−1",
  weapon: { wpnName: "Bone Claws", wpnRange: "Melee", wpnDamage: "1 phy" },
  experiences: [],
  features: [
    {
      name: "Minion (4)",
      type: "Passive",
      text: "The Dredge is defeated when they take any damage. For every 4 damage a PC deals to the Dredge, defeat an additional Minion within range the attack would succeed against.",
    },
    {
      name: "Group Attack",
      type: "Action",
      text: "Spend a Fear to choose a target and spotlight all Dredges within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage.",
    },
  ],
};

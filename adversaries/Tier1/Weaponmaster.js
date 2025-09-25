export const Weaponmaster = {
  name: "WEAPONMASTER",
  tier: 1,
  type: "Bruiser",
  desc: "A master-at-arms wielding a sword twice their size.",
  motives: "Act first, aim for the weakest, intimidate",
  difficulty: 14,
  thresholds: [8, 15],
  hp: 6,
  stress: 3,
  atk: "+2",
  weapon: {
    wpnName: "Claymore",
    wpnRange: "Very Close",
    wpnDamage: "1d12+2 phy",
  },
  experiences: [],
  features: [
    {
      name: "Goading Strike",
      type: "Action",
      text: "Make a standard attack against a target. On a success, mark a Stress to Taunt the target until their next successful attack. The next time the Taunted target attacks, they have disadvantage against targets other than the Weaponmaster.",
    },
    {
      name: "Adrenaline Burst",
      type: "Action",
      text: "Once per scene, spend a Fear to clear 2 HP or 2 Stress.",
    },
    {
      name: "Momentum",
      type: "Reaction",
      text: "When the Weaponmaster makes a successful attack against a PC, you gain a Fear.",
    },
  ],
};

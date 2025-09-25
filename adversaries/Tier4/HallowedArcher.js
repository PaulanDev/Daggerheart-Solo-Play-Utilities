export const HallowedArcher = {
  name: "HALLOWED ARCHER",
  tier: 4,
  type: "Ranged",
  desc: "Spirit soldiers with sanctified bows.",
  motives: "Focus fire, obey, reposition, volley",
  difficulty: 19,
  thresholds: [25, 45],
  hp: 3,
  stress: 2,
  atk: "+4",
  weapon: {
    wpnName: "Sanctified Longbow",
    wpnRange: "Far",
    wpnDamage: "4d8+8 phy",
  },
  experiences: [],
  features: [
    {
      name: "Punish the Guilty",
      type: "Passive",
      text: "The Archer deals double damage to targets marked Guilty by a High Seraph.",
    },
    {
      name: "Divine Volley",
      type: "Action",
      text: "Mark a Stress to make a standard attack against up to three targets.",
    },
  ],
};

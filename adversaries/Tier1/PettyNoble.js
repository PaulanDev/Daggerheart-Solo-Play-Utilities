export const PettyNoble = {
  name: "PETTY NOBLE",
  tier: 1,
  type: "Social",
  desc: "A richly dressed and adorned aristocrat brimming with hubris.",
  motives: "Abuse power, gather resources, mobilize minions",
  difficulty: 14,
  thresholds: [6, 10],
  hp: 3,
  stress: 5,
  atk: "−3",
  weapon: { wpnName: "Rapier", wpnRange: "Melee", wpnDamage: "1d6+1 phy" },
  experiences: ["Aristocrat +3"],
  features: [
    {
      name: "My Land, My Rules",
      type: "Passive",
      text: "All social actions made against the Noble on their land have disadvantage.",
    },
    {
      name: "Guards, Seize Them!",
      type: "Action",
      text: "Once per scene, mark a Stress to summon 1d4 Bladed Guards, who appear at Far range to enforce the Noble’s will.",
    },
    {
      name: "Exile",
      type: "Action",
      text: "Spend a Fear and target a PC. The Noble proclaims that the target and their allies are exiled from the noble’s territory. While exiled, the target and their allies have disadvantage during social situations within the Noble’s domain.",
    },
  ],
};

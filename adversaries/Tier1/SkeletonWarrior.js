export const SkeletonWarrior = {
  name: "SKELETON WARRIOR",
  tier: 1,
  type: "Standard",
  desc: "A dirt-covered skeleton armed with a rusted blade.",
  motives: "Feign death, gang up, steal skin",
  difficulty: 10,
  thresholds: [4, 8],
  hp: 3,
  stress: 2,
  atk: "+0",
  weapon: { wpnName: "Sword", wpnRange: "Melee", wpnDamage: "1d6+2 phy" },
  experiences: [],
  features: [
    {
      name: "Only Bones",
      type: "Passive",
      text: "The Warrior is resistant to physical damage.",
    },
    {
      name: "Won’t Stay Dead",
      type: "Reaction",
      text: "When the Warrior is defeated, you can spotlight them and roll a d6. On a result of 6, if there are other adversaries on the battlefi eld, the Warrior re-forms with no marked HP.",
    },
  ],
};

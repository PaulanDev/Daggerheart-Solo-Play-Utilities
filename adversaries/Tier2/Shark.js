export const Shark = {
  name: "SHARK",
  tier: 2,
  type: "Bruiser",
  desc: "A large aquatic predator, always on the move.",
  motives: "Find the blood, isolate prey, target the weak",
  difficulty: 14,
  thresholds: [14, 28],
  hp: 7,
  stress: 3,
  atk: "+2",
  weapon: {
    wpnName: "Toothy Maw",
    wpnRange: "Very Close",
    wpnDamage: "2d12+1 phy",
  },
  experiences: ["Sense of Smell +3"],
  features: [
    {
      name: "Terrifying",
      type: "Passive",
      text: "When the Shark makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear.",
    },
    {
      name: "Rending Bite",
      type: "Passive",
      text: "When the Shark makes a successful attack, the target must mark an Armor Slot without receiving its benefi ts (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP.",
    },
    {
      name: "Blood in the Water",
      type: "Reaction",
      text: "When a creature within Close range of the Shark marks HP from another creature’s attack, you can mark a Stress to immediately spotlight the Shark, moving them into Melee range of the target and making a standard attack.",
    },
  ],
};

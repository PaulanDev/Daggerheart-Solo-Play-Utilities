export const HeadVampire = {
  name: "HEAD VAMPIRE",
  tier: 3,
  type: "Leader",
  desc: "A captivating undead dressed in aristocratic finery.",
  motives: "Create thralls, charm, command, fly, intimidate",
  difficulty: 17,
  thresholds: [22, 42],
  hp: 6,
  stress: 6,
  atk: "+5",
  weapon: { wpnName: "Rapier", wpnRange: "Melee", wpnDamage: "2d20+4 phy" },
  experiences: ["Aristocrat +3"],
  features: [
    {
      name: "Terrifying",
      type: "Passive",
      text: "When the Vampire makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear.",
    },
    {
      name: "Look into My Eyes",
      type: "Passive",
      text: "A creature who moves into Melee range of the Vampire must make an Instinct Reaction Roll. On a failure, you gain 1d4 Fear.",
    },
    {
      name: "Feed on Followers",
      type: "Action",
      text: "When the Vampire is within Melee range of an ally, they can cause the ally to mark a HP. The Vampire then clears a HP.",
    },
    {
      name: "The Hunt Is On",
      type: "Action",
      text: "Spend 2 Fear to summon 1d4 Vampires, who appear at Far range and immediately take the spotlight.",
    },
    {
      name: "Lifesuck",
      type: "Reaction",
      text: "When the Vampire is spotlighted, roll a d8. On a result of 6 or higher, all targets within Very Close range must mark a HP.",
    },
  ],
};

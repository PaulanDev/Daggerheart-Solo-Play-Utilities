export const AssassinPoisoner = {
  name: "ASSASSIN POISONER",
  tier: 2,
  type: "Skulk",
  desc: "A cunning scoundrel skilled in both poisons and ambushing.",
  motives: "Anticipate, get paid, kill, taint food and water",
  difficulty: 14,
  thresholds: [8, 16],
  hp: 4,
  stress: 4,
  atk: "+3",
  weapon: {
    wpnName: "Poisoned Throwing Dagger",
    wpnRange: "Close",
    wpnDamage: "2d8+1 phy",
  },
  experiences: ["Intrusion +2"],
  features: [
    {
      name: "Grindletooth Venom",
      type: "Passive",
      text: "Targets who mark HP from the Assassin’s attacks are Vulnerable until they clear a HP.",
    },
    {
      name: "Out of Nowhere",
      type: "Passive",
      text: "The Assassin has advantage on attacks if they are Hidden.",
    },
    {
      name: "Fumigation",
      type: "Action",
      text: "Drop a smoke bomb that fi lls the air within Close range with smoke, Dizzying all targets in this area. Dizzied targets have disadvantage on their next action roll, then clear the condition.",
    },
  ],
};

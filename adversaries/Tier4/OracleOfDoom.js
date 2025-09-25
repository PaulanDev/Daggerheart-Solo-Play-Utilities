export const OracleOfDoom = {
  name: "ORACLE OF DOOM",
  tier: 4,
  type: "Solo",
  desc: "A towering immortal and incarnation of fate, cursed to only see bad outcomes.",
  motives: "Change environment, condemn, dishearten, toss aside",
  difficulty: 20,
  thresholds: [38, 68],
  hp: 11,
  stress: 10,
  atk: "+8",
  weapon: {
    wpnName: "Psychic Attack",
    wpnRange: "Far",
    wpnDamage: "4d8+9 mag",
  },
  experiences: ["Boundless Knowledge +4"],
  features: [
    {
      name: "Terrifying",
      type: "Passive",
      text: "When the Oracle makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear.",
    },
    {
      name: "Walls Closing In",
      type: "Passive",
      text: "When a creature rolls a failure while within Very Far range of the Oracle, they must mark a Stress.",
    },
    {
      name: "Pronounce Fate",
      type: "Action",
      text: "Spend a Fear to present a target within Far range with a vision of their personal nightmare. The target must make a Knowledge Reaction Roll. On a failure, they lose all Hope and take 2d20+4 direct magic damage. On a success, they take half damage and lose a Hope.",
    },
    {
      name: "Summon Tormentors",
      type: "Action",
      text: "Once per day, spend 2 Fear to summon 2d4 Tier 2 or below Minions relevant to one of the PC’s personal nightmares. They appear at Close range relative to that PC.",
    },
    {
      name: "Ominous Knowledge",
      type: "Reaction",
      text: "When the Oracle sees a mortal creature, they instantly know one of their personal nightmares.",
    },
    {
      name: "Vengeful Fate",
      type: "Reaction",
      text: "When the Oracle marks HP from an attack within Very Close range, you can mark a Stress to knock the attacker back to Far range and deal 2d10+4 physical damage.",
    },
  ],
};

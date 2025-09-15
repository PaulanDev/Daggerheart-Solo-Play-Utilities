export const PirateRaiders = {
  name: "PIRATE RAIDERS",
  tier: 1,
  type: "Horde",
  desc: "(3/HP) Seafaring scoundrels moving in a ravaging pack.",
  motives: "Gang up, plunder, raid",
  difficulty: 12,
  thresholds: [5, 11],
  hp: 4,
  stress: 3,
  atk: "+1",
  weapon: { wpnName: "Cutlass", wpnRange: "Melee", wpnDamage: "1d8+2 phy" },
  experiences: ["Sailor +3"],
  features: [
    {
      name: "Horde (1d4+1)",
      type: "Passive",
      text: "When the Raiders have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead.",
    },
    {
      name: "Swashbuckler",
      type: "Passive",
      text: "When the Raiders mark 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress.",
    },
  ],
};

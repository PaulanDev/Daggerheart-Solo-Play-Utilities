export const AcidBurrower = {
  name: "ACID BURROWER",
  tier: 1,
  type: "Solo",
  desc: "A horse-sized insect with digging claws and acidic blood.",
  motives: "Burrow, drag away, feed, reposition",
  difficulty: 14,
  thresholds: [8, 15],
  hp: 8,
  stress: 3,
  atk: "+3",
  weapon: {
    wpnName: "Claws",
    wpnRange: "Very Close",
    wpnDamage: "1d12+2 phy",
  },
  experiences: ["Tremor Sense +2"],
  features: [
    {
      name: "Relentless (3)",
      type: "Passive",
      text: "The Burrower can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Earth Eruption",
      type: "Action",
      text: "Mark a Stress to have the Burrower burst out of the ground. All creatures within Very Close range must succeed on an Agility Reaction Roll or be knocked over, making them Vulnerable until they next act.",
    },
    {
      name: "Spit Acid",
      type: "Action",
      text: "Make an attack against all targets in front of the Burrower within Close range. Targets the Burrower succeeds against take 2d6 physical damage and must mark an Armor Slot without receiving its benefi ts (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP and you gain a Fear.",
    },
    {
      name: "Acid Bath",
      type: "Reaction",
      text: "When the Burrower takes Severe damage, all creatures within Close range are bathed in their acidic blood, taking 1d10 physical damage. This splash covers the ground within Very Close range with blood, and all creatures other than the Burrower who move through it take 1d6 physical damage.",
    },
  ],
};

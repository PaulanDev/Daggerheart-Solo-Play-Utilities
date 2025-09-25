export const VolcanicDragonMoltenScourge = {
  name: "VOLCANIC DRAGON: MOLTEN SCOURGE",
  tier: 4,
  type: "Solo",
  desc: "Enraged by their wounds, the dragon bursts into molten lava.",
  motives: "Douse with lava, incinerate, repel Invaders, reposition",
  difficulty: 20,
  thresholds: [30, 58],
  hp: 7,
  stress: 5,
  atk: "+9",
  weapon: {
    wpnName: "Lava-Coated Claws",
    wpnRange: "Close",
    wpnDamage: "4d12+4 phy",
  },
  experiences: ["Hunt from Above +5"],
  features: [
    {
      name: "Relentless (3)",
      type: "Passive",
      text: "The Molten Scourge can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Cracked Scales",
      type: "Passive",
      text: "When the Molten Scourge takes damage, roll a number of d6s equal to HP marked. For each result of 4 or higher, you gain a Fear.",
    },
    {
      name: "Shattering Might",
      type: "Action",
      text: "Mark a Stress to make an attack against a target within Very Close range. On a success, the target takes 4d8+1 physical damage, loses a Hope, and is knocked back to Close range. The Molten Scourge clears a Stress.",
    },
    {
      name: "Eruption",
      type: "Action",
      text: "Spend a Fear to erupt lava from beneath the Molten Scourge’s scales, filling the area within Very Close range with molten lava. All targets in that area must succeed on an Agility Reaction Roll or take 4d6+6 physical damage and be knocked back to Close range. This area remains lava. When a creature other than the Molten Scourge enters that area or acts while inside of it, they must mark 6 HP.",
    },
    {
      name: "Volcanic Breath",
      type: "Reaction",
      text: "When the Molten Scourge takes Major damage, roll a d10. On a result of 8 or higher, the Molten Scourge breathes a fl ow of lava in front of them within Far range. All targets in that area must make an Agility Reaction Roll. Targets who fail take 2d10+4 physical damage, mark 1d4 Stress, and are Vulnerable until they clear a Stress. Targets who succeed take half damage and must mark a Stress.",
    },
    {
      name: "Lava Splash",
      type: "Reaction",
      text: "When the Molten Scourge takes Severe damage from an attack within Very Close range, molten blood gushes from the wound and deals 2d10+4 direct physical damage to the attacker.",
    },
    {
      name: "Ashen Vengeance (Phase Change)",
      type: "Reaction",
      text: "When the Molten Scourge marks their last HP, replace them with the Ashen Tyrant and immediately spotlight them.",
    },
  ],
};

export const BattleBox = {
  name: "BATTLE BOX",
  tier: 2,
  type: "Solo",
  desc: "A cube-shaped construct with a different rune on each of their six sides.",
  motives: "Change tactics, trample foes, wait in disguise",
  difficulty: 15,
  thresholds: [10, 20],
  hp: 8,
  stress: 6,
  atk: "+2",
  weapon: { wpnName: "Slam", wpnRange: "Melee", wpnDamage: "2d6+3 phy" },
  experiences: ["Camouflage +2"],
  features: [
    {
      name: "Relentless (2)",
      type: "Passive",
      text: "The Box can be spotlighted up to two times times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Randomized Tactics",
      type: "Action",
      text: "Mark a Stress and roll a d6. The Box uses the corresponding move: 1. Mana Beam. The Box fires a searing beam. Make an attack against a target within Far range. On a success, deal 2d10+2 magic damage. 2. Fire Jets. The Box shoots into the air, spinning and releasing jets of flame. Make an attack against all targets within Close range. Targets the Box succeeds against take 2d8 physical damage. 3. Trample. The Box rockets around erratically. Make an attack against all PCs within Close range. Targets the Box succeeds against take 1d6+5 physical damage and are Vulnerable until their next roll with Hope. 4. Shocking Gas. The Box sprays out a silver gas sparking with lightning. All targets within Close range must succeed on a Finesse Reaction Roll or mark 3 Stress. 5. Stunning Clap. The Box leaps and their sides clap, creating a small sonic boom. All targets within Very Close range must succeed on a Strength Reaction Roll or become Vulnerable until the cube is defeated. 6. Psionic Whine. The Box releases a cluster of mechanical bees whose buzz rattles mortal minds. All targets within Close range must succeed on a Presence Reaction Roll or take 2d4+9 direct magic damage.",
    },
    {
      name: "Overcharge",
      type: "Reaction",
      text: "Before rolling damage for the Box’s attack, you can mark a Stress to add a d6 to the damage roll. Additionally, you gain a Fear.",
    },
    {
      name: "Death Quake",
      type: "Reaction",
      text: "When the Box marks their last HP, the magic powering them ruptures in an explosion of force. All targets within Close range must succeed on an Instinct Reaction Roll or take 2d8+1 magic damage.",
    },
  ],
};

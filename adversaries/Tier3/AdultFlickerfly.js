export const AdultFlickerfly = {
  name: "ADULT FLICKERFLY",
  tier: 3,
  type: "Solo",
  desc: "A winged insect the size of a large house with iridescent scales and wings that move too fast to track.",
  motives: "Collect shiny things, hunt, nest, swoop",
  difficulty: 17,
  thresholds: [20, 35],
  hp: 12,
  stress: 6,
  atk: "+3",
  weapon: {
    wpnName: "Wing Slash",
    wpnRange: "Very Close",
    wpnDamage: "3d20 phy",
  },
  experiences: [],
  features: [
    {
      name: "Relentless (4)",
      type: "Passive",
      text: "The Flickerfly can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Never Misses",
      type: "Passive",
      text: "When the Flickerfly makes an attack, the target’s Evasion is halved against the attack.",
    },
    {
      name: "Deadly Flight",
      type: "Passive",
      text: "While flying, the Flickerfly can move up to Far range instead of Close range before taking an action.",
    },
    {
      name: "Whirlwind",
      type: "Action",
      text: "Spend a Fear to whirl, making an attack against all targets within Very Close range. Targets the Flickerfly succeeds against take 3d8 direct physical damage.",
    },
    {
      name: "Mind Dance",
      type: "Action",
      text: "Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target’s fears.",
    },
    {
      name: "Hallucinatory Breath",
      type: "Action",
      text: "Countdown (Loop 1d6). When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must make an Instinct Reaction Roll or be tormented by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail lose 2 Hope and take 3d8+3 direct magic damage.",
    },
    {
      name: "Uncanny Reflexes",
      type: "Reaction",
      text: "When the Flickerfly takes damage from an attack within Close range, you can mark a Stress to take half damage.",
    },
  ],
};

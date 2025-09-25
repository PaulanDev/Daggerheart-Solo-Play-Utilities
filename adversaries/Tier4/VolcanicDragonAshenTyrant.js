export const VolcanicDragonAshenTyrant = {
  name: "VOLCANIC DRAGON: ASHEN TYRANT",
  tier: 4,
  type: "Solo",
  desc: "No enemy has ever had the insolence to wound the dragon so. As the lava settles, it’s ground to ash like the dragon’s past foes.",
  motives: "Choke, fly, intimidate, kill or be killed",
  difficulty: 18,
  thresholds: [29, 55],
  hp: 8,
  stress: 5,
  atk: "+10",
  weapon: {
    wpnName: "Claws and Teeth",
    wpnRange: "Close",
    wpnDamage: "4d12+15 phy",
  },
  experiences: ["Hunt from Above +5"],
  features: [
    {
      name: "Relentless (4)",
      type: "Passive",
      text: "The Ashen Tyrant can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them.",
    },
    {
      name: "Cornered",
      type: "Passive",
      text: "Mark a Stress instead of spending a Fear to spotlight the Ashen Tyrant.",
    },
    {
      name: "Injured Wings",
      type: "Passive",
      text: "While flying, the Ashen Tyrant gains a +1 bonus to their Diffi culty.",
    },
    {
      name: "Ashes to Ashes",
      type: "Passive",
      text: "When a PC rolls a failure while within Close range of the Ashen Tyrant, they lose a Hope and you gain a Fear. If the PC can’t lose a Hope, they must mark a HP.",
    },
    {
      name: "Desperate Rampage",
      type: "Action",
      text: "Mark a Stress to make an attack against all targets within Close range. Targets the Ashen Tyrant succeeds against take 2d20+2 physical damage, are knocked back to Close range of where they were, and must mark a Stress.",
    },
    {
      name: "Ashen Cloud",
      type: "Action",
      text: "Spend a Fear to smash the ground and kick up ash within Far range. While within the ash cloud, a target has disadvantage on action rolls. The ash cloud clears the next time an adversary is spotlighted.",
    },
    {
      name: "Apocalyptic Thrashing",
      type: "Action",
      text: "Countdown (1d12). Spend a Fear to activate. It ticks down when a PC rolls with Fear. When it triggers, the Ashen Tyrant thrashes about, causing environmental damage (such as an earthquake, avalanche, or collapsing walls). All targets within Far range must make a Strength Reaction Roll. Targets who fail take 2d10+10 physical damage and are Restrained by the rubble until they break free with a successful Strength Roll. Targets who succeed take half damage. If the Ashen Tyrant is defeated while this countdown is active, trigger the countdown immediately as the destruction caused by their death throes.",
    },
  ],
};

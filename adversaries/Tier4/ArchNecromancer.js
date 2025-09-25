export const ArchNecromancer = {
  name: "ARCH-NECROMANCER",
  tier: 4,
  type: "Leader",
  desc: "A decaying mage adorned in dark, tattered robes.",
  motives: "Corrupt, decay, flee to fight another day, resurrect",
  difficulty: 21,
  thresholds: [33, 66],
  hp: 9,
  stress: 8,
  atk: "+6",
  weapon: {
    wpnName: "Necrotic Blast",
    wpnRange: "Far",
    wpnDamage: "4d12+8 mag",
  },
  experiences: ["Forbidden Knowledge +3", "Wisdom of Centuries +3"],
  features: [
    {
      name: "Dance of Death",
      type: "Action",
      text: "Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage, or full damage if you spend a Fear.",
    },
    {
      name: "Beam of Decay",
      type: "Action",
      text: "Mark 2 Stress to cause all targets within Far range to make a Strength Reaction Roll. Targets who fail take 2d20+12 magic damage and you gain a Fear. Targets who succeed take half damage. A target who marks 2 or more HP must also mark 2 Stress and becomes Vulnerable until they roll with Hope.",
    },
    {
      name: "Open the Gates of Death",
      type: "Action",
      text: "Spend a Fear to summon a Zombie Legion, which appears at Close range and immediately takes the spotlight.",
    },
    {
      name: "Not Today, My Dears",
      type: "Reaction",
      text: "When the Necromancer has marked 7 or more of their HP, you can spend a Fear to have them teleport away to a safe location to recover. A PC who succeeds on an Instinct Roll can trace the teleportation magic to their destination.",
    },
    {
      name: "Your Life Is Mine",
      type: "Reaction",
      text: "Countdown (Loop 2d6). When the Necromancer has marked 6 or more of their HP, activate the countdown. When it triggers, deal 2d10+6 direct magic damage to a target within Close range. The Necromancer then clears a number of Stress or HP equal to the number of HP marked by the target from this attack.",
    },
  ],
};

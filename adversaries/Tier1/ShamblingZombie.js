export const ShamblingZombie = {
  name: "SHAMBLING ZOMBIE",
  tier: 1,
  type: "Standard",
  desc: "An animated corpse that moves shakily, driven only by hunger.",
  motives: "Devour, hungry, mob enemy, shred flesh",
  difficulty: 10,
  thresholds: [4, 6],
  hp: 4,
  stress: 1,
  atk: "+0",
  weapon: { wpnName: "Bite", wpnRange: "Melee", wpnDamage: "1d6+1 phy" },
  experiences: [],
  features: [
    {
      name: "Too Many to Handle",
      type: "Passive",
      text: "When the Zombie is within Melee range of a creature and at least one other Zombie is within Close range, all attacks against that creature have advantage.",
    },
    {
      name: "Horrifying",
      type: "Passive",
      text: "Targets who mark HP from the Zombie’s attacks must also mark a Stress.",
    },
  ],
};

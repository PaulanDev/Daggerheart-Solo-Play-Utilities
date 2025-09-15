export const SwarmOfRats = {
  name: "SWARM OF RATS",
  tier: 1,
  type: "Horde",
  desc: "(10/HP) A skittering mass of ordinary rodents moving as one like a ravenous wave.",
  motives: "Consume, obscure, swarm",
  difficulty: 10,
  thresholds: [6, 10],
  hp: 6,
  stress: 2,
  atk: "−3",
  weapon: { wpnName: "Claws", wpnRange: "Melee", wpnDamage: "1d8+2 phy" },
  experiences: [],
  features: [
    {
      name: "Horde (1d4+1)",
      type: "Passive",
      text: "When the Swarm has marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead.",
    },
    {
      name: "In Your Face",
      type: "Passive",
      text: "All targets within Melee range have disadvantage on attacks against targets other than the Swarm.",
    },
  ],
};

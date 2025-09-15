export const TangleBrambleSwarm = {
  name: "TANGLE BRAMBLE SWARM",
  tier: 1,
  type: "Horde",
  desc: "(3/HP) A cluster of animate, blood-drinking tumbleweeds, each the size of a large gourd.",
  motives: "Digest, entangle, immobilize",
  difficulty: 12,
  thresholds: [6, 11],
  hp: 6,
  stress: 3,
  atk: "+0",
  weapon: { wpnName: "Thorns", wpnRange: "Melee", wpnDamage: "1d6+3 phy" },
  experiences: ["Camouflage +2"],
  features: [
    {
      name: "Horde (1d4+2)",
      type: "Passive",
      text: "When the Swarm has marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead.",
    },
    {
      name: "Crush",
      type: "Action",
      text: "Mark a Stress to deal 2d6+8 direct physical damage to a target with 3 or more bramble tokens.",
    },
    {
      name: "Encumber",
      type: "Reaction",
      text: "When the Swarm succeeds on an attack, give the target a bramble token. If a target has any bramble tokens, they are Restrained. If a target has 3 or more bramble tokens, they are also Vulnerable. All bramble tokens can be removed by succeeding on a Finesse Roll (12 + the number of bramble tokens) or dealing Major or greater damage to the Swarm. If bramble tokens are removed from a target using a Finesse Roll, a number of Tangle Bramble Minions spawn within Melee range equal to the number of tokens removed.",
    },
  ],
};
